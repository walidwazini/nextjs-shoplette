import React from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { BsStarHalf, BsStarFill, BsStar } from "react-icons/bs";
import imageUrlBuilder from "@sanity/image-url";

import client from "../utils/client";

const ProductCard = ({ title, price, imageSrc, onNavigate }) => {
  return (
    <div
      className={`realtive flex flex-col w-[20rem] h-[32rem] hover:border-4 hover:border-red-600  bg-white mb-28`}
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
        >
          <MdFavoriteBorder className='w-4 h-4' />
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
          <p className='font-semibold text-xl'>{title}</p>
          {/* For sepcial tags e.g: offers, lmited deals.., COD, local seller  */}
          <div id='tags'></div>
          <p className='text-red-500 text-lg font-semibold'>RM {price}</p>
          {/* RATING  */}
          <div className='flex items-center justify-start mt-2'>
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStar />
            <BsStar />
            <span className='ml-2'>0 sold</span>
          </div>
        </div>
        <button
          className={` w-full p-4 mt-4 text-sm font-medium bg-yellow-500 rounded-sm`}
          type='button'
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
