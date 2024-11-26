import React from "react";
import bgDayak from "@/assets/images/bg-dayak.jpg";
import heroImg from "@/assets/images/hero-img.png";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgDayak})` }}
    >
      <div className="absolute inset-0 bg-black opacity-65"></div>{" "}
      {/* Overlay with opacity */}
      <div className="relative grid grid-cols-2 gap-5 place-items-center align-center h-full w-full px-[3.25rem] pt-[10rem] pb-[5rem]">
        <div className="flex flex-col items-start gap-y-[1.25rem]">
          <h1 className="text-white text-[2.5rem] font-bold">
            West Borneo Culinary
          </h1>
          <hr className="border-t-2 border-gray-300 w-full rounded-full" />
          <p className="text-[0.875rem] font-semibold text-justify">
            A Taste of Tradition: Discover the rich culinary heritage of West
            Borneo, where every dish tells a story. From the bold flavors of
            spicy Sambas to the sweet, caramelized delights of Pontianak’s
            Pisang Goreng, experience a symphony of tastes crafted from local
            ingredients and age-old recipes. Explore the vibrant street food
            scene, unique Dayak dishes, and the region’s love for fresh seafood.
            West Borneo Culinary is your gateway to authentic flavors and
            unforgettable dining experiences.
          </p>
          <Link
            to="/list"
            className={`min-w-[34.375rem] ${buttonVariants({
              variant: "default",
            })}`}
          >
            Start Discovering
          </Link>
        </div>
        <div className="items-center justify-center w-fit h-fit">
          <img src={heroImg} className="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
