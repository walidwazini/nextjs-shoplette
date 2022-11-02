import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import NavBar2 from "../components/NavBar2";

const CheckoutScreen = () => {
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
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      {/* <nav className={`relative top-0 w-full h-[18vh] flex flex-col `}>
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
        <div></div>
      </nav> */}
      <NavBar2 title={"Checkout"} />
      <div className='container mx-auto mt-10 w-full flex justify-center '>
        Checkout
      </div>
    </>
  );
};

export default CheckoutScreen;
