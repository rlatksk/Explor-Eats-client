import React, { useEffect,useState } from 'react'
import PageDesc from '@/layout/PageDesc'
import CheHunTiau from '@/assets/images/CheHunTiau.jpg';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Singkawang1 from '@/assets/images/Singkawang1.png';
import Pontianak1 from '@/assets/images/Pontianak1.png';
import Pontianak2 from '@/assets/images/Pontianak2.jpg';
function PlacesDetails() {
  const { city } = useParams();
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`/api/city/${city}`)
      .then((res) => {
        setLocation(res.data);
      })
      .catch((err) => {
        console.error('Error fetching city data:', err);
        setError('City data not found.');
      });
  }, [city]);

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!location) {
    return <div className="text-center text-gray-500">Loading city details...</div>;
  }

  let cityImage;
  if (location.city === 'Singkawang') {
    cityImage = Singkawang1;
  } else if (location.city === 'Pontianak') {
    cityImage = Pontianak2;
  } else {
    cityImage = Singkawang1;
  }

  return (
    <div>
      <PageDesc title={`Details of ${location.city}`} route={`Home / Place / ${location.city}`} />
      <div className='flex flex-col h-fit bg-tertiaryColor gap-[3.125rem] pt-[4.375rem] pb-[3.125rem] px-[15rem]'>
        <Link to={"/"} className='text-secondaryColor font-semibold text-[1.25rem]'>
          &larr; Back
        </Link>
        <div className='grid grid-cols-7 gap-12'>
          <div className='flex flex-col col-span-3'>
            <img
              src={cityImage}
              alt={location.city}
              className='object-cover h-full w-full'
            />
          </div>
          <div className='grid grid-cols-2 grid-rows-2 col-span-4 gap-x-8 gap-y-10 py-10'>
            <div className='flex flex-col bg-primaryColor text-secondaryColor border-secondaryColor border-2 rounded-[2rem] p-6'>
              <h1 className='text-secondaryColor font-bold text-[2rem]'>People</h1>
              <p className='text-secondaryColor font-semibold text-[0.938rem] text-justify'>
                {location.peopleDescription}
              </p>
            </div>
            <div className='flex flex-col bg-primaryColor text-secondaryColor border-secondaryColor border-2 rounded-[2rem] p-6'>
              <h1 className='text-secondaryColor font-bold text-[2rem]'>Culture</h1>
              <p className='text-secondaryColor font-semibold text-[0.938rem] text-justify'>
              {location.cultureDescription}
              </p>
            </div>
            <div className='flex flex-col bg-primaryColor text-secondaryColor border-secondaryColor border-2 rounded-[2rem] p-6'>
              <h1 className='text-secondaryColor font-bold text-[2rem]'>Culinary</h1>
              <p className='text-secondaryColor font-semibold text-[0.938rem] text-justify'>
              {location.culinaryDescription}
              </p>
            </div>
            <div className='flex items-center justify-center flex-col gap-10 bg-secondaryColor text-primaryColor border-secondaryColor border-2 rounded-[2rem] p-6'>
              <h1 className='text-primaryColor font-bold text-[2rem]'>List Makanan</h1>
              <Link to={`/list/${location.city}`} className='bg-primaryColor text-white px-6 py-4 rounded-full flex items-center justify-center hover:bg-gray'>
                <h1 className='text-secondaryColor font-bold text-[2rem]'>&rarr;</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlacesDetails;