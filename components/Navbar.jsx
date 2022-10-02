import React from "react";
import Link from "next/link";
import { BsCart4, BsMenuApp } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { useSelector } from "react-redux";

import SWhite1 from "./svg/conv-swhite1.svg";

const recentSearch = [
  "Keyboard",
  "Head n Shoulder",
  "Peanut butter ",
  "Jam Tangan",
];

const IconComp = React.forwardRef(function CustomComponent(props, ref) {
  return <BsCart4 className='text-white text-3xl' />;
});

const Navbar = () => {
  const cartState = useSelector((state) => state.cart);
  return (
    <nav
      className={`relative top-0 bg-red-500 sm:bg-red-700 w-full h-[15vh] flex flex-col px-1 sm:px-4 lg:px-12`}
    >
      <div
        id='nav-upper'
        className={`basis-1/5  flex flex-row justify-between mt-1`}
      >
        <div className={`text-white text-[0.65rem] md:text-xs `}>
          <span className='ml-0 mr-2 hover:text-red-300'>
            <Link href={"/"}>Seller Centre</Link>
          </span>{" "}
          <span className='mr-2 hover:text-red-300'>
            <Link href={"/"}>Download</Link>
          </span>
          <span> Follow us on ..</span>
        </div>
        <div className={`text-white text-[0.65rem] `}>
          <span className='hover:text-red-400 hover:cursor-pointer mr-4'>
            <Link href={"/"}>Sign Up</Link>
          </span>
          <span className='hover:text-red-400 hover:cursor-pointer'>
            <Link href={"/"}>Login</Link>
          </span>
        </div>
      </div>
      <div className={`basis-4/5  flex flex-row max-h-full `}>
        <div
          className={`basis-1/6 w-auto h-auto flex justify-center items-center `}
          id='logo'
        >
          <Link className='' href={"/"}>
            <div className='hover:cursor-pointer w-auto h-auto text-slate-700 text-center'>
              <SWhite1 className={`text-4xl sm:text-5xl `} />
            </div>
          </Link>
        </div>
        <div className={`block sm:hidden bg-purple-500 h-10 w-10`}>
          <BsMenuApp className='h-8 w-8' />
        </div>
        {/*  SEARCH BAR  */}
        <div className={`basis-4/6 hidden sm:flex flex-col`}>
          <form className='basis-[70%] relative py-0 bg-purple-500 h-full'>
            <label
              htmlFor='default-search'
              className={`text-sm font-medium text-gray-900 sr-only dark:text-gray-300`}
            >
              Search
            </label>

            <input
              type='search'
              id='default-search'
              className={`block px-2 py-2 pl-10 w-full text-sm h-full
                  focus:ring-red-500 focus:border-red-500 bg-slate-600  
                  border-gray-600 dark:placeholder-gray-400 text-black
                   dark:focus:ring-red-500 dark:focus:border-red-500`}
              placeholder='Search Mockups, Logos...'
              required=''
            />
            <button
              type='submit'
              className={`text-white absolute right-2.5 bottom-2.5  focus:ring-4 focus:outline-none focus:ring-blue-300 
                 md:font-medium rounded-lg text-sm px-3 md:px-4 py-2
                  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 bg-red-700 hover:bg-red-800`}
            >
              {/* <SearchSVG /> */}
              <GoSearch className='text-xs ' />
            </button>
          </form>
          <div className='basis-[30%] flex flex-row justify-start items-center gap-5 mb-[0.1rem] mt-1  '>
            {recentSearch.map((search, i) => (
              <h1
                className={`text-white text-[0.6rem] md:text-xs hover:cursor-pointer hover:text-red-400`}
                key={search + i}
              >
                {search}
              </h1>
            ))}
          </div>
        </div>
        {/* CART ICON N LINK  */}
        <div
          className={`basis-1/6 justify-center items-center 
          
          md:flex hidden hover:cursor-pointer`}
        >
          <Link className='' href={`/`}>
            <div className={` relative p-2`}>
              <IconComp />
              <div className='absolute bg-white rounded-full py-1 px-2 text-sm -top-2 -right-2 text-rose-600 font-bold '>
                {cartState.items.length}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
