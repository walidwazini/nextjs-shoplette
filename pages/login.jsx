import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";

import SWhite1 from "../components/svg/conv-swhite1.svg";
import { userActions } from "../store/user-slice";

const LoginScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [input, setInput] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState(null);
  const [passwError, setPasswError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const passwordToggle = () => setShowPassword((prevState) => !prevState);
  // const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const ValidateEmail = (email) => {
    if (emailRegex.test(email)) {
      return true;
    }
    setEmailError("Invalid email format !");
    return false;
  };

  const ValidatePassword = (password) => {
    if (password.trim("").length === 0) {
      setPasswError("Please enter your password");
      return false;
    } else if (password.trim("").length > 13 || password.trim("").length < 6) {
      setPasswError("Password length not valid.");
      return false;
    } else return true;
  };

  const submitHandler = async (ev) => {
    ev.preventDefault();
    setEmailError(null);
    setPasswError(null);

    if (
      ValidateEmail(input.email) === false ||
      ValidatePassword(input.password) === false
    ) {
      // Display error on UI
      console.log("false");
    } else {
      setEmailError(null);
      // API call
      try {
        const { data } = await axios.post("/api/users/login", {
          email: input.email,
          password: input.password,
        });
        dispatch(userActions.userLogin(data));
        localStorage.setItem("online-user", JSON.stringify(data));
        router.push("/");
      } catch (err) {
        console.log(err.response.data.message);
      }
    }

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
           bg-slate-300 text-base-200 shadow-md rounded-md py-2 px-12`}
          >
            <div className={`flex w-full items-start py-2 my-2`}>
              <h1 className='text-2xl'>Login</h1>
            </div>
            <div className='p-2 mt-1  h-full flex flex-col gap-3 w-full'>
              <input
                type={`text`}
                placeholder='Username / Email'
                className={`w-full h-10 text-xs p-2 placeholder:text-green-700
              focus:ring  focus:ring-red-400 `}
                value={input.email}
                // pattern={/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/}
                onChange={(ev) =>
                  setInput({ ...input, email: ev.target.value })
                }
              />
              {emailError && (
                <p className='text-red-500 -mt-2 text-xs font-semibold'>
                  {/* {formErrors.email} */}
                  {emailError}
                </p>
              )}
              <div className='relative'>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder='Password'
                  autoComplete={"false"}
                  className={`w-full h-10 text-xs p-2
                focus:ring  focus:ring-red-400 `}
                  value={input.password}
                  onChange={(ev) =>
                    setInput({ ...input, password: ev.target.value })
                  }
                />
                <span
                  onClick={passwordToggle}
                  className='absolute inset-y-0 right-4 inline-flex items-center hover:cursor-pointer'
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
              {passwError && (
                <p className='text-red-500 -mt-2 text-xs font-semibold'>
                  {passwError}
                </p>
              )}

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
                  onClick={() => router.push("/signup")}
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
