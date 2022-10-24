import React from "react";
import User from "..";

const sampleAvatar = "https://www.w3schools.com/howto/img_avatar.png";

const ProfilePage = () => {
  return (
    <User>
      <div className='flex flex-col gap-1 p-4 h-full '>
        <div className='basis-1/6 px-4 flex flex-col '>
          <h1 className='font-semibold text-md'>My Profile</h1>
          <p className='text-sm'>Manage and protect your account</p>
          <span className='p-[1px] bg-indigo-300 w-full mt-6 '></span>
        </div>
        <div className={`basis-5/6 flex gap-1 h-full `}>
          <div className={`basis-[70%]  p-4 `}>
            <form className={`h-full flex flex-col`}>
              <div className={` basis-4/5 flex flex-col p-2 gap-4 `}>
                <div className={` flex h-12 py-1 px-4 gap-4`}>
                  <label
                    className={` flex justify-end items-center text-sm w-[90px] `}
                  >
                    Name
                  </label>
                  <input
                    className={`text-sm p-2 w-[450px] `}
                    placeholder='Profile Name'
                  />
                </div>
                <div className={`flex h-12 py-1 px-4 gap-4`}>
                  <label
                    className={` flex justify-end items-center text-sm w-[90px] `}
                  >
                    Email
                  </label>
                  <input
                    className={`text-sm p-2 w-[450px] `}
                    placeholder='email@address.com'
                  />
                </div>
                <div className={` flex h-12 py-1 px-4 gap-4`}>
                  <label
                    className={` flex justify-end items-center text-sm w-[90px] `}
                  >
                    Date of Birth
                  </label>
                  <input
                    className={`text-sm p-2 w-[450px] `}
                    placeholder='18/18/1818'
                  />
                </div>
              </div>
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
          <div className={`basis-[30%] h-[40%] flex `}>
            <span className='p-[1px] bg-indigo-300 h-full mx-3 '></span>
            <form
              className={`flex flex-col gap-2 w-full justify-center items-center`}
            >
              <img className={`mt-2 rounded-full h-24 `} src={sampleAvatar} />
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
