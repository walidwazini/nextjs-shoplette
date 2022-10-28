import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import User from "..";
import client from "../../../utils/client";
import { useRouter } from "next/router";
import { userActions } from "../../../store/user-slice";

const AddressItem = ({
  street,
  postal,
  state,
  defaultAddress,
  userId,
  addressKey,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const setDefaultHandler = async (id) => {
    await axios.put(`http://localhost:3000/api/users/${id}`, {
      _key: addressKey,
    });
    const { addresses } = await client.fetch(
      `*[_type == 'user' && _id == '${userId}'][0]`
    );
    const updatedDefAddress = addresses.filter((a) => a._key === addressKey)[0];
    // const updatedDefAddress = ans[0];
    console.log(updatedDefAddress);
    dispatch(userActions.newDefaultAddress(updatedDefAddress));
    router.push("/user/account/addresses");
  };

  return (
    <div
      className={`flex w-full px-3 py-2 h-40 rounded-sm shadow-sm bg-slate-200 `}
    >
      <div className={`basis-4/6 flex flex-col`}>
        <div className={`flex justify-between w-44 text-md  py-2 mb-1`}>
          <p className='font-bold'>Name</p>
          <span></span>
          <p className='font-extralight'>012-3456767</p>
        </div>
        <p>{street}</p>
        <p>{`${postal},${state}`}</p>
        <div className=' p-1 w-full mt-2 '>
          {defaultAddress._key === addressKey && (
            <div
              className={`border border-red-500 w-16 flex justify-center items-center p-1
            text-sm text-red-600`}
            >
              Default
            </div>
          )}
        </div>
      </div>
      <div className={`basis-2/6 flex flex-col justify-around p-2 `}>
        <div className='flex justify-between items-center w-full px-10  '>
          <button className='text-black text-lg font-medium'>
            <AiFillEdit />
          </button>
          <button className='text-black text-lg font-medium'>
            <AiFillDelete />
          </button>
        </div>
        <div className='px-2 w-full  flex justify-center '>
          <button
            className={`border border-black bg-transparent text-sm py-1 px-2`}
            onClick={() => setDefaultHandler(userId)}
          >
            Set as Default
          </button>
        </div>
      </div>
    </div>
  );
};

const Addresses = () => {
  const [mounted, setMounted] = useState(false);
  const loggedInUser = useSelector((state) => state.user.userInfo);
  const { addresses, _id, defaultAddress } = loggedInUser;

  useEffect(() => setMounted(true));

  const fetchAddress = async () => {
    const user = await client.fetch(`*[_type == 'user' && _id == '${_id}'][0]`);
  };

  return (
    <User>
      <div className={`flex flex-col text-base-100 w-full  `}>
        <div className={`p-4 font-semibold `}>My Addresses</div>
        <span className='p-[0.5px] bg-indigo-300 w-full mt-6 '></span>
        <div className={`p-4`}>
          <h1 className='mb-6'>Addresses</h1>
          {mounted && (
            <div className='w-full flex flex-col gap-3'>
              {addresses?.map((address) => (
                <AddressItem
                  userId={_id}
                  key={address._key}
                  addressKey={address._key}
                  defaultAddress={defaultAddress}
                  postal={address.postal}
                  state={address.state}
                  street={address.street}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </User>
  );
};

export default Addresses;
