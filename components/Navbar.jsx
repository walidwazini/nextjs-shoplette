import React from "react";
import Link from "next/link";
import { BsCart4, BsMenuApp } from "react-icons/bs";
import { GoSearch } from "react-icons/go";

import SWhite1 from "./svg/conv-swhite1.svg";

const recentSearch = [
  "Keyboard",
  "Head n Shoulder",
  "Peanut butter ",
  "Jam Tangan",
];

const Navbar = () => {
  return (
    <nav
      className={`relative top-0 bg-red-500 sm:bg-red-700 w-full h-[13vh] flex flex-col px-14`}
    >
      <div
        id='nav-upper'
        className={`basis-1/5  flex flex-row justify-between mt-1`}
      >
        <div className={`text-white text-sm `}>
          <span className='ml-0 mr-2 hover:text-red-300'>
            <Link href={"/"}>Seller Centre</Link>
          </span>{" "}
          <span className='mr-2 hover:text-red-300'>
            <Link href={"/"}>Download</Link>
          </span>
          <span> Follow us on ..</span>
        </div>
        <div className={`text-white text-sm `}>
          <span className='hover:text-red-400 hover:cursor-pointer mr-4'>
            <Link href={"/"}>Sign Up</Link>
          </span>
          <span className='hover:text-red-400 hover:cursor-pointer'>
            <Link href={"/"}>Login</Link>
          </span>
        </div>
      </div>
      <div className={`basis-4/5 flex flex-row `}>
        <div
          className={`basis-1/6  flex justify-center items-center`}
          id='logo'
        >
          <Link className='' href={"/"}>
            <div className='hover:cursor-pointer w-20 h-14 text-slate-700 text-center'>
              <SWhite1 className={`text-6xl `} />
            </div>
          </Link>
        </div>
        <div className={`block md:hidden bg-yellow-500 h-10 w-10`}>
          <BsMenuApp className='h-8 w-8' />
        </div>
        {/*  SEARCH BAR  */}
        <div className={`basis-4/6 hidden md:block`}>
          <form>
            <label
              htmlFor='default-search'
              className={`text-sm font-medium text-gray-900 sr-only dark:text-gray-300`}
            >
              Search
            </label>
            <div className='relative'>
              <input
                type='search'
                id='default-search'
                className={`block p-4 pl-10 w-full text-sm text-gray-900 
                  focus:ring-red-500 focus:border-red-500 dark:bg-slate-600 bg-white 
                  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black
                   dark:focus:ring-red-500 dark:focus:border-red-500`}
                placeholder='Search Mockups, Logos...'
                required=''
              />
              <button
                type='submit'
                className={`text-white absolute right-2.5 bottom-2.5  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 
                  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 bg-red-700 hover:bg-red-800`}
              >
                {/* <SearchSVG /> */}
                <GoSearch />
              </button>
            </div>
          </form>
          <div className='flex flex-row justify-start items-center gap-5 mt-1'>
            {recentSearch.map((search, i) => (
              <h1
                className={`text-white text-xs hover:cursor-pointer hover:text-red-400`}
                key={search + i}
              >
                {search}
              </h1>
            ))}
          </div>
        </div>
        {/* CART ICON N LINK  */}
        <div className={`basis-1/6 justify-center items-center md:flex hidden`}>
          <BsCart4 className='text-white w-7 h-7' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
