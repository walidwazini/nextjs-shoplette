import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsCart4, BsMenuApp } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import SWhite1 from "./svg/conv-swhite1.svg";
import { userSignOut } from "../store/user-slice";

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
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const cartState = useSelector((state) => state.cart);
  const onlineUser = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const dropdownMenu = [
    {
      id: "m2",
      title: "My Account",
      function: () => {
        router.push("/user/account/profile");
      },
    },
    {
      id: "m3",
      title: "My Purchase",
      function: () => router.push("/user/purchase"),
    },
    {
      id: "m1",
      title: "Logout",
      function: () => {
        dispatch(userSignOut());
        router.push("/");
      },
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav
      className={`relative top-0 bg-red-500 sm:bg-red-700 w-full h-[18vh] 
      flex flex-col py-1 px-1 sm:px-4 lg:px-32`}
    >
      <div
        id='nav-upper'
        className={`basis-1/5 flex justify-between items-center md:px-14 `}
      >
        <div className={`text-white text-[0.65rem] md:text-sm `}>
          <span className='ml-0 mr-2 hover:text-red-300'>
            <Link href={"/"}>Seller Centre</Link>
          </span>
          <span className='mr-2 hover:text-red-300'>
            <Link href={"/"}>Download</Link>
          </span>
          <span> Follow us on ..</span>
        </div>
        <div className={`text-white text-[0.65rem] md:text-sm `}>
          {mounted && (
            <>
              {Array.isArray(onlineUser) && (
                <span className='hover:text-red-400 hover:cursor-pointer mr-4'>
                  <Link href={"/signup"}>Sign Up</Link>
                </span>
              )}
              {Array.isArray(onlineUser) && (
                <span className='hover:text-red-400 hover:cursor-pointer'>
                  <Link href={"/login"}>Login</Link>
                </span>
              )}
              {/* {!Array.isArray(onlineUser) && <span>{onlineUser.name}</span>} */}
              {!Array.isArray(onlineUser) && (
                <span className='dropdown dropdown-end dropdown-hover '>
                  <label
                    tabIndex={0}
                    className={`mx-2 h-full py-0.5 px-2 flex items-center rounded-md bg-red-800 hover:bg-red-600`}
                  >
                    {onlineUser.name}
                  </label>
                  <ul
                    tabIndex={0}
                    className='dropdown-content p-2 shadow-md bg-rose-600 rounded-md w-40'
                  >
                    {dropdownMenu.map((menu) => (
                      <li key={menu.id} className='hover:bg-red-500 p-1'>
                        {menu.title !== "Logout" ? (
                          <button
                            onClick={menu.function}
                            className='p-1 rounded-md '
                          >
                            {menu.title}
                          </button>
                        ) : (
                          <button
                            onClick={menu.function}
                            className='p-1 rounded-md flex justify-between items-center w-full '
                          >
                            <span>{menu.title}</span>
                            <span>
                              <AiOutlineLogout />
                            </span>
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                </span>
              )}
            </>
          )}
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
          <form className='basis-[70%] relative py-3 '>
            <input
              type='search'
              id='default-search'
              className={`block px-2 py-2 pl-10 w-full text-sm h-full
                   bg-slate-600  
                  border-gray-600 d text-white
                   `}
              placeholder='Search Mockups, Logos...'
              required=''
            />
            <button
              type='submit'
              className={`text-white absolute right-2.5 top-[1.2rem] 
                 md:font-medium rounded-lg text-sm px-3 md:px-4 py-2
                 bg-red-700 hover:bg-red-600`}
            >
              {/* <SearchSVG /> */}
              <GoSearch className='text-sm lg:text-lg ' />
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
          <Link className='' href={`/cart`}>
            <div className={` relative p-2`}>
              <IconComp />
              <div className='absolute bg-white rounded-full py-1 px-2 text-sm -top-2 -right-2 text-rose-600 font-bold '>
                {/* {cartState.items.length} */}
                {cartState.totalProduct}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
