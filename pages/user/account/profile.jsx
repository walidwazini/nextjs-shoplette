import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import User from "..";

const ProfilePage = () => {
  const sampleAvatar = "https://www.w3schools.com/howto/img_avatar.png";
  const loggedInUser = useSelector((state) => state.user.userInfo);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <User>
      <div className='flex flex-col gap-1 p-4 h-full '>
        <div className='basis-1/6 px-4 flex flex-col '>
          <h1 className='font-semibold text-md'>My Profile</h1>
          <p className='text-sm'>Manage and protect your account</p>
          <span className='p-[1px] bg-indigo-300 w-full mt-6 '></span>
        </div>
        <div className={`basis-5/6 flex gap-1 h-full `}>
          <div className={`basis-3/5 lg:basis-[70%]  p-4 `}>
            <form className={`h-full flex flex-col`}>
              {mount && (
                <div className={` basis-4/5 flex flex-col p-2 gap-4 `}>
                  <div className={` flex h-12 py-1 px-4 gap-4 bg-red-500`}>
                    <label
                      className={` flex justify-end items-center text-sm 
                      basis-[30%] `}
                    >
                      Name
                    </label>
                    <input
                      className={`text-sm p-2 basis-[70%] `}
                      placeholder={loggedInUser.name}
                    />
                  </div>
                  <div className={`flex h-12 py-1 px-4 gap-4`}>
                    <label
                      className={` flex justify-end items-center text-sm 
                     basis-[30%] `}
                    >
                      Email
                    </label>
                    <input
                      className={`text-sm p-2 basis-[70%] `}
                      placeholder={loggedInUser.email}
                    />
                  </div>
                  <div className={` flex h-12 py-1 px-4 gap-4`}>
                    <label
                      className={` flex justify-end items-center text-sm 
                      basis-[30%] `}
                    >
                      Date of Birth
                    </label>
                    <input
                      className={`text-sm p-2 basis-[70%] `}
                      placeholder='18/18/1818'
                    />
                  </div>
                </div>
              )}
              <div className='basis-1/5 w-full flex pl-32 items-center '>
                <button
                  className={`shadow-md py-2 px-6 text-md w-28 rounded-md
                text-white bg-red-600 hover:bg-red-700`}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
          <div
            className={`basis-2/5 bg-green-500 lg:basis-[30%] h-[40%] flex `}
          >
            <span className='p-[1px] bg-indigo-300 h-full mr-3 '></span>
            <form
              className={`flex flex-col gap-2 w-full justify-center items-center`}
            >
              {mount && (
                <img
                  className={`mt-2 rounded-full h-20 `}
                  alt='profile_image'
                  src={sampleAvatar}
                />
              )}
              <button
                className={`mt-4 border border-gray-300 bg-white p-2 text-sm`}
              >
                Select Image
              </button>
            </form>
          </div>
        </div>
      </div>
    </User>
  );
};

export default ProfilePage;
