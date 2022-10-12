import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

import SWhite1 from "../components/svg/conv-swhite1.svg";

const signInState = { title: "Sign In", button: "Login" };
const registerState = { title: "Register", button: "Submit" };

const LoginScreen = () => {
  const [title, setTitle] = useState("Login");
  const [pageState, setPageState] = useState(signInState);

  return (
    <>
      <Head>
        <title>Authorization</title>
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
        <div
          className={`basis-[45%] h-full bg-red-700 flex justify-center items-center`}
        >
          <form
            className={`w-[75%] h-[85%] flex flex-col justify-start items-center
           bg-slate-300 shadow-md rounded-md py-4 px-12`}
          >
            <div className={`flex w-full items-start py-2 my-2`}>
              <h1 className='text-2xl'>{pageState.title}</h1>
            </div>
            <div className='p-2 mt-6 flex flex-col gap-6 w-full'>
              <input
                type={`text`}
                placeholder='Fullname'
                className={`w-full h-10 text-xs p-2
              focus:ring  focus:ring-red-400 `}
              />
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
              {/* <input
                type={"password"}
                placeholder='Confirm Password'
                className={`w-full h-10 text-xs p-2
              focus:ring  focus:ring-red-400 `}
              /> */}
            </div>
            <button
              className={`mt-3 w-1/2 px-6 py-2 rounded-md  text-white
            hover:bg-blue-500 bg-blue-700 uppercase`}
            >
              {pageState.button}
            </button>
          </form>
        </div>
      </div>
      <footer className='min-h-[20vh]'>Footer</footer>
    </>
  );
};

export default LoginScreen;
