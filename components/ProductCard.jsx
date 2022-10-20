import React, { useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Rating } from "@mui/material";
import imageUrlBuilder from "@sanity/image-url";
import { useRouter } from "next/router";

import client from "../utils/client";

const ProductCard = ({ title, id, price, imageSrc, onNavigate, rating }) => {
  const [favor, setFavor] = useState(false);
  const router = useRouter();

  const favorHandler = () => setFavor((state) => !state);

  const navigateHandler = (idCurrent) => {
    router.push(`/product/${idCurrent}`);
  };

  return (
    <div>
      <div
        className={`flex flex-col
       
      w-[13rem] h-[25rem] md:w-[18rem] md:h-[30rem]
      hover:cursor-pointer 
    hover:border-4 hover:border-red-600  bg-white mb-28`}
        onClick={onNavigate}
      >
        {/* IMAGE N ICON  */}
        <div
          id='upper'
          className=' w-full basis-2/3 bg-red-500 overflow-y-hidden'
        >
          <button
            className='absolute mt-2 ml-2 text-white bg-black rounded-full p-2'
            type='button'
            onClick={favorHandler}
          >
            {favor ? (
              <MdFavorite className='w-4 h-4' />
            ) : (
              <MdFavoriteBorder className='w-4 h-4' />
            )}
          </button>
          <img
            className=' w-full h-full object-cover'
            src={imageUrlBuilder(client).image(imageSrc)}
            alt='Build Your Own Drone'
            loading='lazy'
          />
        </div>

        <div id='lower' className='flex flex-col basis-1/3 justify-between'>
          <div className='flex flex-col h-16 py-1 px-2 '>
            <p className='font-semibold text-md md:text-xl text-base-100 '>
              {title}
            </p>
            {/* For sepcial tags e.g: offers, lmited deals.., COD, local seller  */}
            <div id='tags'></div>
            <p className='text-red-500 text-sm md:text-lg font-semibold'>
              RM {price}
            </p>
            {/* RATING  */}
            <div className='flex items-center justify-start text-base-200 mt-2 text-sm md:text-md '>
              <Rating readOnly value={Math.floor(rating)} />
              <span className='ml-2 '>{rating}</span>
              <span className='ml-5 '>0 sold</span>
            </div>
          </div>
          <div
            onClick={() => navigateHandler(id.current)}
            className={` w-full text-center p-2 md:p-4 mt-4 text-base-200
            text-sm hover:text-md font-medium bg-yellow-500 hover:bg-yellow-400 `}
          >
            View Item
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
