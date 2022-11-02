import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoSearch } from "react-icons/go";
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import SWhite1 from "./svg/conv-swhite1.svg";
import { userSignOut } from "../store/user-slice";

const NavBar2 = ({ isCart, title }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const onlineUser = useSelector((state) => state.user.userInfo);
  const [mounted, setMounted] = useState(false);

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
    <nav className={`relative top-0  w-full h-[18vh] flex flex-col `}>
      <div
        id='upper'
        className={`basis-1/5 flex justify-between items-center
      bg-red-700 md:px-16
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
      <div
        id='lower'
        className={`basis-4/5 flex w-full px-16 lg:px-36
      bg-slate-600
      `}
      >
        <div id='link' className={`basis-1/2  flex items-center justify-start`}>
          <div className='flex items-center w-auto h-full '>
            <div className='px-6'>
              <Link className='' href={"/"}>
                <div className='hover:cursor-pointer'>
                  <SWhite1 className={`text-6xl`} />
                </div>
              </Link>
            </div>
            <span className='p-[0.1rem] bg-white w-auto h-2/3'></span>
            <div
              className={`flex px-6 justify-center items-center
            text-white lg:text-3xl md:text-2xl text-lg `}
            >
              {title}
            </div>
          </div>
        </div>
        {isCart && (
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
        )}
      </div>
    </nav>
  );
};

export default NavBar2;
