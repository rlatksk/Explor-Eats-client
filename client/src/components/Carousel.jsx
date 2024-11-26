import React, { useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import CheHunTiau from '@/assets/images/CheHunTiau.jpg';

const TWEEN_FACTOR_BASE = 0.3; // Factor to control the tweening intensity

// Utility function to keep values within a range
const numberWithinRange = (number, min, max) => Math.min(Math.max(number, min), max);

const Carousel = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, 
    [Autoplay({ stopOnMouseEnter:true, delay: 2000, stopOnInteraction: false, })]
  );
  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);

  // Set up the tweening nodes on the slides
  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => 
      slideNode.querySelector('.embla__slide__number')
    );
  }, []);

  // Set the tweening factor based on the number of slides
  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  // Apply the scale transformation to the slides based on their distance to the center
  const tweenScale = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === 'scroll';

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        // Handle loop adjustments
        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();
            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);
              if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
              if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
            }
          });
        }

        // Calculate and apply scale transformation
        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const scale = numberWithinRange(tweenValue, 0, 1).toString();
        const tweenNode = tweenNodes.current[slideIndex];
        tweenNode.style.transform = `scale(${scale})`;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale);
  }, [emblaApi, tweenScale]);

  return (
    <div className="embla" >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
                <div className="embla__slide__number"> 
                  <img className="embla__slide__image" src={slide.image}  />
                    <Link to={`/details/food/${slide.id}`} className="embla__slide__overlay flex-col p-10 text-center">
                      <p className="text-white text-[1rem] mb-5">{slide.text}</p>
                      <h2 className='text-white text-[2.5rem]'>{slide.name}</h2>
                    </Link>
                </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export{ Carousel };
