import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdLocationOn } from "react-icons/md";

import NavBar2 from "../components/NavBar2";
const sampleImage = "https://picsum.photos/id/60/300/300";

const ProductOrderItem = ({ name, brand, unitPrice, qty }) => {
  return (
    <li className={` flex flex-col h-40 bg-[#89b6c9]`}>
      <div className='flex h-2/3 w-full px-2 '>
        <div className='w-1/2  flex flex-col p-2 gap-2 '>
          <div className='text-xs font-semibold '>{brand}</div>
          <div className={`flex justify-start items-center gap-2 `}>
            <img className='h-16' src={sampleImage} />
            <div>{name}</div>
          </div>
        </div>
        <div className={`w-1/6 flex justify-center items-center `}>
          RM {unitPrice}
        </div>
        <div className='w-1/6 flex justify-center items-center '>{qty}</div>
        <div className='w-1/6 flex justify-center items-center '>
          RM {unitPrice * qty}
        </div>
      </div>
      <div className={`h-1/3 flex bg-[#ececec] `}>
        <div
          className={`basis-2/5 p-3  gap-2 flex justify-center items-center `}
        >
          <div className='text-xs'>Message :</div>
          <input
            className='text-2xs py-1 px-3 '
            placeholder='(Optional) Leave message to seller.'
          />
        </div>
      </div>
    </li>
  );
};

const CheckoutScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { defaultAddress } = useSelector((state) => state.user.userInfo);
  const { items, totalAmount } = useSelector((state) => state.cart);
  const [mounted, setMounted] = useState(false);

  // console.log(defaultAddress);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (items.length < 1) router.push("/");
  });

  // console.log(items);

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <NavBar2 title={"Checkout"} />
      <div className='container  mx-auto my-5 min-h-[80vh] w-full'>
        <div
          className={`flex flex-col justify-center items-center gap-3 p-1 w-full h-full `}
        >
          <div
            className={`flex flex-col w-full py-5 px-5 gap-3 shadow-md  
            text-black border-t-2  bg-[#FDFCDC] `}
          >
            <div
              className={`text-[#EF233C] w-full flex gap-1 justify-start items-center `}
            >
              <MdLocationOn />
              <p>Delivery Address</p>
            </div>
            <div className={` w-full flex gap-1 items-center  `}>
              <div className='basis-3/4 '>
                {`${defaultAddress.street}, ${defaultAddress.state}, ${defaultAddress.postal}`}
              </div>
              <div className='basis-1/4'>
                <button className='text-blue-500 hover:text-blue-700 font-medium  '>
                  Change
                </button>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col w-full py-2 px-4 gap-1 shadow-md  
          text-black  bg-[#4b88a2] `}
          >
            <div className='flex my-5 w-full uppercase text-md text-gray-200  '>
              <h3 className='font-semibold   w-1/2'>Product(s) Ordered</h3>
              <h3 className='font-semibold  text-center   w-1/6 '>
                Unit Price
              </h3>
              <h3 className='font-semibold   w-1/6 text-center'>Quantity</h3>
              <h3 className='font-semibold   w-1/6 text-center'>
                Item Subtotal
              </h3>
            </div>
            <ul
              className={`flex flex-col lg:h-[70%] w-full gap-2
               overflow-x-hidden`}
            >
              {items.map((item) => (
                <ProductOrderItem
                  key={item.id}
                  name={item.name}
                  brand={item.brand}
                  qty={item.quantity}
                  unitPrice={item.price}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <footer>Footer</footer>
    </>
  );
};

export default CheckoutScreen;
