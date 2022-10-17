import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import SWhite1 from "../components/svg/conv-swhite1.svg";

// const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const LoginScreen = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});

  const validate = (values) => {
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    return errors;
  };

  const submitHandler = (ev) => {
    ev.preventDefault();

    setFormErrors(validate(input));
    console.log(input);
    setInput({ email: "", password: "" });
  };

  return (
    <>
      <Head>
        <title>Login now to start shopping!</title>
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
        className={`bg-red-600 h-[80vh] w-full px-4 md:px-10 lg:px-24
      flex justify-center items-center gap-4`}
      >
        <div
          className={`flex justify-center items-center
        basis-[40%] lg:basis-[55%] h-full  `}
        >
          <SWhite1 className={`text-[9rem] lg:text-[11rem]`} />
        </div>
        <div
          className={`basis-3/5 lg:basis-[45%] h-full flex justify-center items-center`}
        >
          <form
            onSubmit={submitHandler}
            className={`w-[75%] min-h-[85%] flex flex-col justify-start items-center
           bg-slate-300 shadow-md rounded-md py-2 px-12`}
          >
            <div className={`flex w-full items-start py-2 my-2`}>
              <h1 className='text-2xl'>Login</h1>
            </div>
            <div className='p-2 mt-1  h-full flex flex-col gap-3 w-full'>
              <input
                type='text'
                placeholder='Username / Email'
                className={`w-full h-10 text-xs p-2
              focus:ring  focus:ring-red-400 `}
                value={input.email}
                // pattern={/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/}
                onChange={(ev) =>
                  setInput({ ...input, email: ev.target.value })
                }
              />
              <p className='text-red-500 text-sm font-bold'>
                {formErrors.email}
              </p>
              <input
                type={"password"}
                placeholder='Password'
                className={`w-full h-10 text-xs p-2
              focus:ring  focus:ring-red-400 `}
                value={input.password}
                onChange={(ev) =>
                  setInput({ ...input, password: ev.target.value })
                }
              />

              <div className={`flex flex-col w-full gap-1`}>
                <button
                  type={`submit`}
                  className={`mt-3 w-full px-6 py-2 rounded-sm  text-white
                hover:bg-blue-500 bg-blue-700 uppercase`}
                >
                  Log In
                </button>

                <Link href={"/"}>
                  <div className='hover:text-slate-500 text-xs hover:cursor-pointer '>
                    Forgot Password
                  </div>
                </Link>
              </div>
              {/* <span className='p-1 bg-red-600 w-full my-6'></span> */}
              <div className='relative h-[10%] flex py-auto items-center'>
                <div className='flex-grow border-t border-gray-600'></div>
                <span className='flex-shrink mx-4 text-gray-600'>or</span>
                <div className='flex-grow border-t border-gray-600'></div>
              </div>
              <div className=' flex justify-center items-center'>
                <button disabled className='py-2 px-4 bg-white rounded-sm'>
                  Google Login
                </button>
              </div>
              <div className='flex justify-center items-center gap-1'>
                <p>New to Shoplette ?</p>
                {"   "}
                <span
                  onClick={() => {}}
                  className={`text-indigo-600 hover:text-indigo-900 font-semibold underline  hover:cursor-pointer `}
                >
                  Sign Up Now
                </span>
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
