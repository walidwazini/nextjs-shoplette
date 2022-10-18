import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const initialInputState = { email: "", password: "", confirmPassword: "" };

const SignUpPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState(initialInputState);
  const passwordToggle = () => setShowPassword((prevState) => !prevState);

  const submitHandler = async (ev) => {
    ev.preventDefault();
    // const { name, email, password, confirmPassword } = details;
    if (input.confirmPassword !== input.password) {
      alert("Password not match");
    }

    try {
      const { data } = await axios.post("/api/users/register", {
        email: input.email,
        password: input.password,
      });
      console.log(data);
      // Dispatch USER_LOGIN

      router.push("/");
      console.log("Nice sign up");
    } catch (err) {
      console.log(err);
    }
    setInput(initialInputState);
  };

  return (
    <div>
      <Head>
        <title>Regiser now to Shoplette now!</title>
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
        <form
          onSubmit={submitHandler}
          className={`w-[35%] min-h-[85%] flex flex-col justify-start items-center
        bg-slate-300 shadow-md rounded-md py-2 px-4 `}
        >
          <div className={`flex w-full justify-center py-2 my-2`}>
            <h1 className='text-2xl'>Sign Up</h1>
          </div>
          <div className='p-2 mt-1  h-full flex flex-col gap-3 w-full'>
            <input
              className='w-full h-10 text-xs p-2 focus:ring focus:ring-red-400'
              placeholder='Email'
              value={input.email}
              onChange={(ev) => setInput({ ...input, email: ev.target.value })}
              type={"email"}
            />
            <div className='relative'>
              <input
                className='w-full h-10 text-xs p-2 focus:ring focus:ring-red-400'
                placeholder='Password'
                autoComplete='false'
                value={input.password}
                onChange={(ev) =>
                  setInput({ ...input, password: ev.target.value })
                }
                type={showPassword ? "text" : "password"}
              />
              <span
                onClick={passwordToggle}
                className='absolute inset-y-0 right-4 inline-flex items-center hover:cursor-pointer'
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>
            <input
              className='w-full h-10 text-xs p-2 focus:ring focus:ring-red-400'
              placeholder='Confirm Password'
              type={"password"}
              value={input.confirmPassword}
              onChange={(ev) =>
                setInput({ ...input, confirmPassword: ev.target.value })
              }
              autoComplete='false'
            />
          </div>

          <button
            type='submit'
            className={`mt-3 w-3/4 px-6 py-2 rounded-sm  text-white
                hover:bg-green-500 bg-green-600 uppercase`}
          >
            Register
          </button>
        </form>
      </div>
      <footer className='min-h-[20vh]'>Footer</footer>
    </div>
  );
};

export default SignUpPage;
