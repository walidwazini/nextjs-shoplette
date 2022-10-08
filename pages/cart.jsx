import React from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { BsTrashFill } from "react-icons/bs";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { BiMinus } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";

import CartNavbar from "../components/CartNavbar";

const unsplashPhoto1 =
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80";

const CartItem = () => {
  return (
    <li class='flex items-center hover:bg-gray-800 -mx-8 px-5 py-5 text-white'>
      <div class='flex w-2/6 '>
        <div class='w-20'>
          <img class='h-24' src={unsplashPhoto1} alt='' />
        </div>
        <div class='flex flex-col justify-between ml-4 py-4'>
          <span class='font-bold text-lg'>Product Name</span>
          <span class='text-blue-500 font-semibold text-xs'>Brand Name</span>
        </div>
      </div>
      <div class='flex justify-center w-1/6'>
        {/* <svg class='fill-current text-gray-600 w-3' viewBox='0 0 448 512'>
          <path d='M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z' />
        </svg> */}
        <button>
          <BiMinus />
        </button>

        <input
          class='mx-2 border text-center w-8 text-black'
          type='text'
          value='1'
        />
        <button>
          {/* <svg class='fill-current text-gray-600 w-3' viewBox='0 0 448 512'>
            <path d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z' />
          </svg> */}
          <IoMdAdd />
        </button>
      </div>
      <div class='text-center w-1/6 font-semibold text-sm'>$40.00</div>
      <div class='text-center w-1/6 font-semibold text-sm'>$40.00</div>
      <div class='text-center w-1/6 font-semibold text-sm'>
        <button onClick={() => {}}>
          <BsTrashFill className='text-red-600 hover:text-red-400 text-xl' />
        </button>
      </div>
    </li>
  );
};

const CartPage = () => {
  const cartState = useSelector((state) => state.cart);
  const { items, totalQuantity, totalProduct, totalAmount } = cartState;
  console.log(items);

  return (
    <>
      <Head>
        <title>{"Shopping Cart"}</title>
      </Head>
      <CartNavbar />
      {/*  Put inside a container  */}
      <>Your Cart</>
      {totalProduct === 0 && (
        <div className=' flex text-center mt-10'>
          <h1>Your cart is empty</h1>
        </div>
      )}
      {
        <div class='container mx-auto mt-10'>
          <div class='flex shadow-md my-10'>
            <div id='order_details' class='w-3/4 bg-gray-900 px-10 py-10'>
              <div class='flex justify-between border-b pb-8 text-white'>
                <h1 class='font-semibold text-2xl'>Shopping Cart</h1>
                <h2 class='font-semibold text-2xl'>{totalProduct} Items</h2>
              </div>
              <div class='flex mt-10 mb-5 w-full'>
                <h3 class='font-semibold text-gray-600 text-xs uppercase w-2/6'>
                  Product Details
                </h3>
                <h3 class='font-semibold text-center text-gray-600 text-xs uppercase w-1/6 '>
                  Quantity
                </h3>
                <h3 class='font-semibold  text-gray-600 text-xs uppercase w-1/6 text-center'>
                  Price
                </h3>
                <h3 class='font-semibold  text-gray-600 text-xs uppercase w-1/6 text-center'>
                  Total
                </h3>
                <h3 class='font-semibold  text-gray-600 text-xs uppercase w-1/6 text-center'></h3>
              </div>
              <ul
                className={`flex flex-col lg:h-[60%] w-full
              overflow-y-scroll 
              divide-y divide-gray-100`}
              >
                <li class='flex items-center hover:bg-gray-700 -mx-8 px-6 py-5'>
                  <div class='flex w-2/5'>
                    <div class='w-20'>
                      <img
                        class='h-24'
                        src='https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z'
                        alt=''
                      />
                    </div>
                    <div class='flex flex-col justify-between ml-4 flex-grow'>
                      <span class='font-bold text-sm'>Iphone 6S</span>
                      <span class='text-red-500 text-xs'>Apple</span>
                      <a
                        href='#'
                        class='font-semibold hover:text-red-500 text-gray-500 text-xs'
                      >
                        Remove
                      </a>
                    </div>
                  </div>
                  <div class='flex justify-center w-1/5'>
                    <svg
                      class='fill-current text-gray-600 w-3'
                      viewBox='0 0 448 512'
                    >
                      <path d='M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z' />
                    </svg>

                    <input
                      class='mx-2 border text-center w-8'
                      type='text'
                      value='1'
                    />

                    <svg
                      class='fill-current text-gray-600 w-3'
                      viewBox='0 0 448 512'
                    >
                      <path d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z' />
                    </svg>
                  </div>
                  <span class='text-center w-1/5 font-semibold text-sm'>
                    $400.00
                  </span>
                  <span class='text-center w-1/5 font-semibold text-sm'>
                    $400.00
                  </span>
                </li>

                <CartItem />
                <CartItem />
                <CartItem />
              </ul>

              <a
                href='#'
                class='flex font-semibold text-indigo-600 text-sm mt-10'
              >
                <svg
                  class='fill-current mr-2 text-indigo-600 w-4'
                  viewBox='0 0 448 512'
                >
                  <path d='M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z' />
                </svg>
                Continue Shopping
              </a>
            </div>

            <div id='order_summary' class='w-1/4 px-8 py-10 bg-red-500'>
              <h1 class='font-semibold text-2xl border-b pb-8'>
                Order Summary
              </h1>
              <div class='flex justify-between mt-10 mb-5'>
                <span class='font-semibold text-sm uppercase'>Items 3</span>
                <span class='font-semibold text-sm'>590$</span>
              </div>
              <div>
                <label class='font-medium inline-block mb-3 text-sm uppercase'>
                  Shipping
                </label>
                <select class='block p-2 text-gray-600 w-full text-sm'>
                  <option>Standard shipping - $10.00</option>
                </select>
              </div>
              <div class='py-10'>
                <label
                  for='promo'
                  class='font-semibold inline-block mb-3 text-sm uppercase'
                >
                  Promo Code
                </label>
                <input
                  type='text'
                  id='promo'
                  placeholder='Enter your code'
                  class='p-2 text-sm w-full'
                />
              </div>
              <button class='bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase'>
                Apply
              </button>
              <div class='border-t mt-8'>
                <div class='flex font-semibold justify-between py-6 text-sm uppercase'>
                  <span>Total cost</span>
                  <span>$600</span>
                </div>
                <button class='bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full'>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      }
      {totalProduct > 0 && (
        <div className={`w-full h-full bg-blue-500 px-10 py-4`}>
          <h1>You have {totalProduct} item in your cart</h1>
          <div className='flex mb-6'>
            <div className={`basis-3/5`}>
              <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-900 text-gray-100'>
                <h2 className='text-xl font-semibold'>Your cart</h2>
                <ul className='flex flex-col divide-y divide-gray-400 px-1 '>
                  <li className=' flex flex-col px-1 py-6 sm:flex-row sm:justify-between'>
                    <div className='flex w-full space-x-2 sm:space-x-4'>
                      <img
                        className='flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500'
                        src='https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80'
                        alt='Polaroid camera'
                      />
                      <div className='flex flex-col justify-between w-full pb-4'>
                        <div className='flex justify-between w-full pb-2 space-x-2'>
                          <div className='space-y-1'>
                            <h3 className='text-lg font-semibold leading-snug sm:pr-8'>
                              Polaroid camera
                            </h3>
                            <p className='text-sm dark:text-gray-400'>
                              Classic
                            </p>
                          </div>
                          <div className='text-right'>
                            <p className='text-lg font-semibold'>59.99€</p>
                            <p className='text-sm line-through dark:text-gray-600'>
                              75.50€
                            </p>
                          </div>
                        </div>
                        <div className='flex text-sm divide-x'>
                          <button
                            type='button'
                            className='flex items-center px-2 py-1 pl-0 space-x-1'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 512 512'
                              className='w-4 h-4 fill-current'
                            >
                              <path d='M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z'></path>
                              <rect
                                width='32'
                                height='200'
                                x='168'
                                y='216'
                              ></rect>
                              <rect
                                width='32'
                                height='200'
                                x='240'
                                y='216'
                              ></rect>
                              <rect
                                width='32'
                                height='200'
                                x='312'
                                y='216'
                              ></rect>
                              <path d='M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z'></path>
                            </svg>
                            <span>Remove</span>
                          </button>
                          <button
                            type='button'
                            className='flex items-center px-2 py-1 space-x-1'
                          >
                            <span>Add to favorites</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='flex flex-col py-6 sm:flex-row sm:justify-between'>
                    <div className='flex w-full space-x-2 sm:space-x-4'>
                      <img
                        className='flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500'
                        src='https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80'
                        alt='Replica headphones'
                      />
                      <div className='flex flex-col justify-between w-full pb-4'>
                        <div className='flex justify-between w-full pb-2 space-x-2'>
                          <div className='space-y-1'>
                            <h3 className='text-lg font-semibold leading-snug sm:pr-8'>
                              Replica headphones
                            </h3>
                            <p className='text-sm dark:text-gray-400'>White</p>
                          </div>
                          <div className='text-right'>
                            <p className='text-lg font-semibold'>99.95€</p>
                            <p className='text-sm line-through dark:text-gray-600'>
                              150€
                            </p>
                          </div>
                        </div>
                        <div className='flex text-sm divide-x'>
                          <button
                            type='button'
                            className='flex items-center px-2 py-1 pl-0 space-x-1'
                          >
                            <BsTrashFill />
                            <span>Remove</span>
                          </button>
                          <button
                            type='button'
                            className='flex items-center px-2 py-1 space-x-1'
                          >
                            <MdOutlineFavoriteBorder />
                            <span>Add to favorites</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`basis-2/5`}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
