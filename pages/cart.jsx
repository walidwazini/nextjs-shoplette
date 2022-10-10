import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { BsTrashFill, BsArrowLeftCircle } from "react-icons/bs";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { BiMinus } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";

import CartNavbar from "../components/CartNavbar";
import axios from "axios";
import { addItemToCart, decreaseOne, editQuantity } from "../store/cart-slice";
import { fetchProducts } from "../store/product-slice";

const unsplashPhoto1 =
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80";

const CartItem = ({
  initialCount,
  productName,
  brandName,
  price,
  slug,
  id,
  productList,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [count, setCount] = useState(initialCount);

  const decrementCount = () => {
    if (count >= 1) {
      setCount(count - 1);
      const info = { count, id };

      const itemList = productList;
      const selectedIndex = itemList.findIndex((item) => info.id === item._id);
      const selectedItem = itemList[selectedIndex];

      dispatch(decreaseOne(info));
    }
  };
  const incrementCount = () => {
    if (count < 10) setCount(count + 1);
    const info = { count, id };
  };
  const updateCartHandler = async (id, qty) => {
    const { data } = await axios.get(`/api/products/${id}`);
    console.log(data);
    dispatch(addItemToCart(data));
  };

  // useEffect(() => {
  //   const getProd = async () => {
  //     const { data } = await axios.get(`/api/products/${id}`);
  //     console.log(data);
  //   };
  //   getProd();
  // });

  return (
    <li className='flex items-center hover:bg-gray-800  py-5 text-white'>
      <div
        onClick={() => router.push(`/product/${slug}`)}
        className='flex w-2/6 hover:cursor-pointer lg:mr-4'
      >
        <div className='w-20'>
          <img className='h-24' src={unsplashPhoto1} alt='' />
        </div>
        <div className='flex flex-col justify-between ml-4 py-4'>
          <span className='font-bold text-lg'>{productName}</span>
          <span className='text-blue-500 font-semibold text-xs'>
            {brandName}
          </span>
        </div>
      </div>
      <div className='flex justify-center w-1/6 '>
        <button disabled={count >= 1} onClick={decrementCount}>
          <BiMinus />
        </button>

        <input
          readOnly
          className='mx-2 border text-center w-8 text-black'
          type='number'
          value={count}
          // onChange={(ev) => updateCartHandler(id, ev.target.value)}
          onKeyDown={(event) => {
            event.preventDefault();
          }}
        />
        <button onClick={incrementCount}>
          <IoMdAdd />
        </button>
      </div>
      <div className='text-center w-1/6 font-semibold text-sm'>RM {price}</div>
      <div className='text-center w-1/6 font-semibold text-sm '>
        RM {price * count}
      </div>
      <div className='text-center w-1/6 font-semibold text-sm'>
        <button onClick={() => {}}>
          <BsTrashFill className='text-red-600 hover:text-red-400 text-xl' />
        </button>
      </div>
    </li>
  );
};

const CartPage = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const productList = useSelector((state) => state.product.items);
  // console.log(productList);
  const {
    items: dummyItems,
    totalQuantity,
    totalProduct,
    totalAmount,
  } = cartState;

  const [sumAmount, setSumAmount] = useState(totalAmount);

  const shippingCharge = 7;

  const updateSumAmount = () => {
    let value;
    value = dummyItems.reduce((a, c) => a + c.price * c.quantity, 0);
    setSumAmount(value);
  };

  return (
    <>
      <Head>
        <title>{"Shopping Cart"}</title>
      </Head>
      <CartNavbar />
      {totalProduct === 0 && (
        <div className=' flex text-center mt-10'>
          <h1>Your cart is empty</h1>
        </div>
      )}
      {
        <div className='container mx-auto mt-10'>
          <div className='flex shadow-md my-10'>
            <div id='order_details' className='w-3/4 bg-gray-900 px-10 py-10'>
              <div className='flex justify-between border-b pb-8 text-white'>
                <h1 className='font-semibold text-2xl'>Shopping Cart</h1>
                <h2 className='font-semibold text-2xl'>{totalProduct} Items</h2>
              </div>
              <div className='flex mt-10 mb-5 w-full text-gray-400 '>
                <h3 className='font-semibold  text-xs uppercase w-2/6'>
                  Product Details
                </h3>
                <h3 className='font-semibold text-center  text-xs uppercase w-1/6 '>
                  Quantity
                </h3>
                <h3 className='font-semibold  text-xs uppercase w-1/6 text-center'>
                  Price
                </h3>
                <h3 className='font-semibold  text-xs uppercase w-1/6 text-center'>
                  Total
                </h3>
                <h3 className='font-semibold 0 text-xs uppercase w-1/6 text-center'></h3>
              </div>
              <ul
                className={`flex flex-col lg:h-[70%] w-full
              overflow-y-scroll overflow-x-hidden
              divide-y divide-gray-100`}
              >
                {dummyItems.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    initialCount={item.quantity}
                    brandName={item.brand}
                    slug={item.slug}
                    productName={item.name}
                    price={item.price}
                    productList={productList}
                  />
                ))}
              </ul>

              <a
                href='/'
                className='flex items-center gap-2 font-semibold text-indigo-600 hover:text-indigo-400 text-sm mt-10'
              >
                <BsArrowLeftCircle className='text-lg' />
                Continue Shopping
              </a>
            </div>

            <div id='order_summary' className='w-1/4 px-8 py-10 bg-slate-500'>
              <h1 className='font-semibold text-2xl border-b pb-8'>
                Order Summary
              </h1>
              <div className='flex justify-between mt-10 mb-5'>
                <span className='font-semibold text-sm uppercase'>Items 3</span>
                <span className='font-semibold text-sm'>
                  {/* Not reactive yet due to changes of item count  */}
                  {/* RM {dummyItems.reduce((a, c) => a + c.price * c.quantity, 0)} */}
                  {/* RM {totalAmount} */}
                  RM {sumAmount}
                </span>
              </div>
              <div>
                <label className='font-medium inline-block mb-3 text-sm uppercase'>
                  Shipping
                </label>
                <select className='block p-2 text-gray-600 w-full text-sm'>
                  <option>Standard shipping - RM 7.00</option>
                </select>
              </div>
              <div className='py-10'>
                <label
                  htmlFor='promo'
                  className='font-semibold inline-block mb-3 text-sm uppercase'
                >
                  Promo Code
                </label>
                <input
                  type='text'
                  id='promo'
                  placeholder='Enter your code'
                  className='p-2 text-sm w-full'
                />
                <button className='bg-red-500 hover:bg-red-600 mt-6 px-5 py-2 text-sm text-white uppercase'>
                  Apply
                </button>
              </div>
              <div className='border-t mt-8'>
                <div className='flex font-semibold justify-between py-6 text-lg uppercase'>
                  <span>Total cost</span>
                  <span>RM {totalAmount + shippingCharge}</span>
                </div>
                <button className='bg-indigo-900 font-semibold hover:bg-indigo-700 py-3 text-sm text-white uppercase w-full'>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default CartPage;
