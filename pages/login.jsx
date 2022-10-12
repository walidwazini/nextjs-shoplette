import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

import SWhite1 from "../components/svg/conv-swhite1.svg";

const signInState = { title: "Login now to start shopping!", button: "Log In" };
const registerState = { title: "Sign Up now today!", button: "Submit" };

const LoginScreen = () => {
  const [pageState, setPageState] = useState(registerState);

  const changeStateHandler = () => {
    if (pageState === registerState) {
      setPageState(signInState);
    } else if (pageState === signInState) {
      setPageState(registerState);
    }
  };

  return (
    <>
      <Head>
        <title>{pageState.title}</title>
      </Head>
      <nav
        className={`relative top-0  w-full h-[13vh] flex items-center 
        px-4 md:px-10 lg:px-24 bg-slate-600 shadow-lg `}
      >
        <Link href={"/"}>
          <div className='text-xl text-white hover:text-slate-400 hover:cursor-pointer '>
            Shoplette
          </div>
        </Link>
      </nav>
      <div
        className={`container bg-red-600 h-[80vh] w-full px-4 md:px-10 lg:px-24
      flex justify-center items-center gap-4`}
      >
        <div
          className={`flex justify-center items-center
        basis-[55%] h-full  `}
        >
          <SWhite1
            style={{
              lineHeight: "12rem",
              fontSize: "14rem",
            }}
          />
        </div>
        <div className={`basis-[45%] h-full flex justify-center items-center`}>
          <form
            className={`w-[75%] min-h-[85%] flex flex-col justify-start items-center
           bg-slate-300 shadow-md rounded-md py-2 px-12`}
          >
            <div className={`flex w-full items-start py-2 my-2`}>
              <h1 className='text-2xl'>
                {pageState === registerState ? "Sign Up" : "Login"}
              </h1>
            </div>
            <div className='p-2 mt-1  h-full flex flex-col gap-3 w-full'>
              {pageState === registerState && (
                <input
                  type={`text`}
                  placeholder='Fullname'
                  className={`w-full h-10 text-xs p-2
              focus:ring  focus:ring-red-400 `}
                />
              )}
              {/* <input
                FOR USERNAME 
              /> */}
              <input
                type='text'
                placeholder='Username / Email'
                className={`w-full h-10 text-xs p-2
              focus:ring  focus:ring-red-400 `}
              />
              {/* <input
                type={`tel`}
                placeholder='Phone Number'
                className={`w-full h-10 text-xs p-2
              focus:ring  focus:ring-red-400 `}
              /> */}
              <input
                type={"password"}
                placeholder='Password'
                className={`w-full h-10 text-xs p-2
              focus:ring  focus:ring-red-400 `}
              />
              {pageState === registerState && (
                <input
                  type={"password"}
                  placeholder='Confirm Password'
                  className={`w-full h-10 text-xs p-2
              focus:ring  focus:ring-red-400 `}
                />
              )}
              <div className={`flex flex-col w-full gap-1`}>
                <button
                  className={`mt-3 w-full px-6 py-2 rounded-sm  text-white
                hover:bg-blue-500 bg-blue-700 uppercase`}
                >
                  {pageState.button}
                </button>
                {pageState === signInState && (
                  <Link href={"/"}>
                    <div className='hover:text-slate-500 text-xs hover:cursor-pointer '>
                      Forgot Password
                    </div>
                  </Link>
                )}
              </div>
              {/* <span className='p-1 bg-red-600 w-full my-6'></span> */}
              <div class='relative h-[10%] flex py-auto items-center'>
                <div class='flex-grow border-t border-gray-600'></div>
                <span class='flex-shrink mx-4 text-gray-600'>or</span>
                <div class='flex-grow border-t border-gray-600'></div>
              </div>
              <div className=' flex justify-center items-center'>
                <button disabled className='py-2 px-4 bg-white rounded-sm'>
                  Google Login
                </button>
              </div>
              <div className='flex justify-center items-center gap-1'>
                {pageState === registerState && (
                  <>
                    <p>Have an account ?</p>
                    {"   "}
                    <span
                      onClick={changeStateHandler}
                      className={`text-red-600 hover:cursor-pointer font-semibold`}
                    >
                      Log In
                    </span>
                  </>
                )}
                {pageState === signInState && (
                  <>
                    <p>New to Shoplette ?</p>
                    {"   "}
                    <span
                      onClick={changeStateHandler}
                      className={`text-red-600 hover:cursor-pointer font-semibold`}
                    >
                      Sign Up
                    </span>
                  </>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      <footer className='min-h-[20vh]'>Footer</footer>
    </>
  );
};

export default LoginScreen;
