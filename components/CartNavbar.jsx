import React from "react";
import Link from "next/link";
import { GoSearch } from "react-icons/go";

import SWhite1 from "./svg/conv-swhite1.svg";

const CartNavbar = () => {
  return (
    <nav className={`relative top-0  w-full h-[18vh] flex flex-col`}>
      <div
        id='upper'
        className={`basis-1/5 flex justify-between items-center 
      bg-red-700 md:px-14
      `}
      >
        <div className={` text-white text-[0.65rem] md:text-sm flex `}>
          <span className='hover:text-red-300 mr-2'>
            <Link href={"/"}>Seller Centre</Link>
          </span>
          <span className='hover:text-red-300 mx-2'>
            <Link href={"/"}>Download</Link>
          </span>
          <span className='hover:text-red-300 mx-2 '>
            <Link href={"/"}>Follow us on...</Link>
          </span>
        </div>
        <div className={`text-white text-[0.65rem] md:text-sm `}>
          <span className='hover:text-red-400 hover:cursor-pointer mr-4'>
            <Link href={"/"}>Notification</Link>
          </span>
          <span className='hover:text-red-400 hover:cursor-pointer mr-4'>
            <Link href={"/"}>Help</Link>
          </span>
          <span className='hover:text-red-400 hover:cursor-pointer'>
            <Link href={"/login"}>Online User</Link>
          </span>
        </div>
      </div>
      <div
        id='lower'
        className={`basis-4/5 flex w-full px-16 lg:px-36
      bg-slate-600
      `}
      >
        <div id='link' className={`basis-1/2  flex items-center justify-start`}>
          <div className='flex items-center divide-x w-auto '>
            <div className='px-6'>
              <Link className='' href={"/"}>
                <div className='hover:cursor-pointer'>
                  <SWhite1 className={`text-6xl`} />
                </div>
              </Link>
            </div>
            <div
              className={`flex px-6 justify-center items-center
            text-white lg:text-3xl md:text-2xl text-lg `}
            >
              Shopping Cart
            </div>
          </div>
        </div>
        <div
          className={`basis-1/2 p-4 flex justify-center items-center`}
          id='search'
        >
          <form className={`relative h-14 md:w-[520px] lg:w-[620px] px-4`}>
            <input
              type='search'
              id='default-search'
              className={`block px-2 py-2 pl-10 w-full text-lg h-full
               bg-slate-300 `}
              placeholder='Search your cart...'
              required=''
            />
            <button
              type='submit'
              className={`text-white absolute right-6 top-[0.4rem] 
              md:font-medium rounded-lg text-sm px-3 md:px-4 py-3
                bg-red-700 hover:bg-red-800`}
            >
              <GoSearch className='text-lg' />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default CartNavbar;
