import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { BsTrashFill, BsArrowLeftCircle } from "react-icons/bs";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { BiMinus } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import axios from "axios";

import { minusOne, plusOne, removeItemFromCart } from "../store/cart-slice";
import NavBar2 from "../components/NavBar2";

const unsplashPhoto1 =
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80";

const CartItem = ({
  initialCount,
  productName,
  brandName,
  price,
  slug,
  id,
  isTicked,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [count, setCount] = useState(initialCount ? initialCount : 1);

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
      const info = { count, id };
      dispatch(minusOne(info));
    }
  };
  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1);
      const info = { count, id };
      dispatch(plusOne(info));
    }
  };

  const removeHandler = () => {
    dispatch(removeItemFromCart(id));
    enqueueSnackbar(`${productName} removed from cart!`, {
      variant: "warning",
    });
  };

  const testProductById = async () => {
    // const { data } = await axios.get(`/api/products/${product._id}`);
    // console.log(data);
  };

  const tickChange = async (ev) => {
    const slug = ev.target.value;
    let isChecked = ev.target.checked === true;
    if (isChecked) {
      console.log(slug);
      // const { data } = await axios.get(`/api/products/${id}`);
      isTicked = true;
      console.log(isTicked);
    }
  };

  return (
    <li className='flex items-center hover:bg-gray-800  py-5 text-white'>
      <div className='w-[9%] flex justify-center '>
        <input
          type={"checkbox"}
          onChange={tickChange}
          value={slug}
          checked={isTicked}
        />
      </div>
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
        <button
          className='disabled:text-slate-700 text-white '
          disabled={count === 1}
          onClick={decrementCount}
        >
          <BiMinus />
        </button>

        <input
          readOnly
          className='mx-2 border text-center w-10 text-base-200 '
          type='text'
          value={count}
        />
        <button
          className='disabled:text-slate-700 text-white '
          disabled={count === 5}
          onClick={incrementCount}
        >
          <IoMdAdd />
        </button>
      </div>
      <div className='text-center w-1/6 font-semibold text-sm'>RM {price}</div>
      <div className='text-center w-1/6 font-semibold text-sm '>
        RM {price * count}
      </div>
      <div className='text-center w-1/6 font-semibold text-sm'>
        <button onClick={removeHandler}>
          <BsTrashFill className='text-red-600 hover:text-red-400 text-xl' />
        </button>
      </div>
    </li>
  );
};

const CartPage = () => {
  const router = useRouter();
  const cartState = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.user);
  const { items, totalQuantity, totalProduct, totalAmount } = cartState;
  const shippingCharge = 7;

  const ase = [
    {
      id: "c4929a52-670c-426a-bb87-f40dac7e8d74",
      name: "Reeve Sky Blue Shirt",
      brand: "Odaman",
      slug: "reeve-sky-blue-shirt",
      price: 10,
      quantity: 5,
      countInStock: 27,
      totalPrice: 10,
      isTicked: true,
    },
    {
      id: "1bcdd762-a321-4b4d-80dc-e606a779fc80",
      name: "Kiiki Cat T-shirt",
      brand: "Quever",
      slug: "kiiki-cat-t-shirt",
      price: 50,
      quantity: 1,
      countInStock: 32,
      totalPrice: 50,
      isTicked: true,
    },
    {
      id: "b2f8b8e8-ef59-4140-bab6-f8bf40174dd7",
      name: "Polar White Sweater",
      brand: "Kovlar",
      slug: "polar-white-sweater",
      price: 5,
      quantity: 2,
      countInStock: 32,
      totalPrice: 10,
      isTicked: false,
    },
  ];

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router, isAuthenticated]);

  const checkoutHandler = () => {
    router.push("/checkout");
  };

  const tickedItem = items?.filter((item) => item.isTicked === true);

  console.log(tickedItem);
  let a = 0;

  tickedItem.forEach((item) => {
    a = a + item.price * item.quantity;
    console.log(a);
  });

  return (
    <>
      <Head>
        <title>{"Shopping Cart"}</title>
      </Head>
      <NavBar2 isCart={true} title='Shopping Cart' />
      <div className='container mx-auto mt-10 w-full flex justify-center '>
        <div className='flex shadow-md my-6 w-[95%]'>
          <div id='order_details' className='w-3/4 bg-gray-900 px-10 py-16'>
            <div className='flex justify-between border-b pb-8 text-white'>
              <h1 className='font-semibold text-2xl'>Shopping Cart</h1>
              <h2 className='font-semibold text-2xl'>{totalProduct} Items</h2>
            </div>
            {totalProduct === 0 && (
              <div className='w-full h-full px-4 py-6 flex flex-col justify-center items-center'>
                <div
                  className={`w-[30rem] h-16 flex justify-center items-center`}
                >
                  <h1 className='text-white text-3xl font-thin'>
                    Your cart is empty.
                  </h1>
                </div>
                <span className='p-1 bg-red-600 w-1/3 my-6'></span>
                <button
                  onClick={() => router.push(`/`)}
                  className={`rounded-md mt-2 py-3 w-32 text-white bg-red-600 
                  hover:font-semibold hover:bg-red-500`}
                >
                  Go to Shop
                </button>
              </div>
            )}
            {totalProduct > 0 && (
              <>
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
                  {items.map((item) => (
                    <CartItem
                      key={item.id}
                      id={item.id}
                      initialCount={item.quantity}
                      brandName={item.brand}
                      slug={item.slug}
                      productName={item.name}
                      price={item.price}
                      isTicked={item.isTicked}
                    />
                  ))}
                </ul>
              </>
            )}
            {totalProduct > 0 && (
              <a
                href='/'
                className='flex items-center gap-2 font-semibold text-indigo-600 hover:text-indigo-400 text-sm mt-10'
              >
                <BsArrowLeftCircle className='text-lg' />
                Continue Shopping
              </a>
            )}
          </div>

          <div
            id='order_summary'
            className='w-1/4 px-8 py-10 bg-slate-400 text-black '
          >
            <h1 className='font-semibold text-2xl border-b pb-8'>
              Order Summary
            </h1>
            <div className='flex justify-between mt-10 mb-5'>
              <span className='font-semibold text-sm uppercase'>
                Item(s) {totalProduct}
              </span>
              <span className='font-semibold text-sm'>
                {/* RM {items.reduce((a, c) => a + c.price * c.quantity, 0)} */}
                RM {totalAmount}
              </span>
            </div>
            <div>
              <label className='font-medium inline-block mb-3 text-sm uppercase'>
                Shipping
              </label>
              <select
                disabled={!totalProduct}
                className='block p-2 text-gray-600 w-full text-sm'
              >
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
                disabled
              />
              <button
                disabled
                className='disabled:bg-slate-400 bg-red-500 hover:bg-red-600 mt-6 px-5 py-2 text-sm text-white uppercase'
              >
                Apply
              </button>
            </div>
            <div className='border-t mt-8'>
              <div className='flex font-semibold justify-between py-6 text-lg uppercase'>
                <span>Total cost</span>

                <span>
                  RM {totalProduct > 0 ? totalAmount + shippingCharge : "0"}
                </span>
              </div>
              <button
                disabled={!totalProduct}
                onClick={checkoutHandler}
                className='disabled:bg-slate-400 bg-indigo-900 font-semibold hover:bg-indigo-700 py-3 text-sm text-white uppercase w-full'
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
