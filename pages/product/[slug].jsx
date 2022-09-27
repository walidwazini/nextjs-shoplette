import React, { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import ReactStars from "react-rating-stars-component";

import { getProductById } from "../../utils/queries";
import Layout from "../../components/Layout";
import client from "../../utils/client";
import Link from "next/link";

const ProductDetails = (props) => {
  const { slug } = props;
  const [state, setState] = useState({
    product: null,
    loading: true,
    errorMessage: "",
  });
  const { product, loading, errorMessage } = state;
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    if (count > 0) setCount(count - 1);
  };
  const incrementCount = () => {
    if (count < 10) setCount(count + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await client.fetch(getProductById(slug), {
          slugValue: slug,
        });
        // const product = await client.fetch(
        //   `*[_type == "product" && slug.current == $slugValue ]`,
        //   { slugValue: slug }
        // );
        setState({ ...state, product, loading: false });
      } catch (err) {
        setState({ ...state, errorMessage: err.message, loading: false });
      }
    };
    fetchData();
  }, [setState, slug]);

  return (
    <Layout title={product?.name}>
      <div className='px-24 py-6 min-h-[100vh] w-full'>
        <Link className='' href={`/`} passHref>
          back to result
        </Link>
        <div className={`flex mt-6 h-[600px] gap-x-6`}>
          {/* IMAGE n Favour  */}
          <div className='flex flex-col basis-2/5 shadow-lg  bg-red-500'>
            {/* IMAGE DIV  */}
            <div
              className={`basis-4/5 flex justify-center items-center bg-slate-700
             shadow-md
            `}
            >
              {product?.image && (
                <img
                  className='w-1/2'
                  src={imageUrlBuilder(client).image(product?.image)}
                />
              )}
            </div>
            {/* RATING N SHARE  */}
            <div className={`bg-blue-500 basis-1/5`}>Share n Favourite</div>
          </div>
          {/* DETAILS  */}
          <div
            className={`basis-3/5  w-full bg-slate-700 shadow-lg
          flex flex-col justify-start items-start
          py-6 pl-8`}
          >
            <div className={`basis-1/3 w-full`}>
              {/* TITLE N RATING  */}
              <div
                className={`basis-1/2 flex flex-col justify-start items-start
                 w-full
           `}
              >
                <h1 className='text-white  text-[2.7rem]  '>{product?.name}</h1>
                <div className={`flex gap-2 items-center w-[400px]`}>
                  <div className='font-bold text-slate-300'>
                    ⭐ {product?.rating} rated
                  </div>
                  {/* <div>sold counts</div> */}
                </div>
              </div>
              {/* PRICE  */}
              <div className='basis-1/2 '>
                <div className={`mt-4  font-bold text-[3rem] text-slate-200`}>
                  RM {product?.price.toFixed(2)}
                </div>
              </div>
            </div>
            <form className={`basis-2/3 w-full flex flex-col`}>
              {/* SHIPPING  */}
              <div className={`basis-1/4  w-full flex h-full p-3`}>
                <div className='basis-1/4 flex justify-start items-start text-slate-200 text-xl'>
                  Shipping
                </div>
              </div>
              {/* VARIANT  */}
              <div className={`basis-1/4 flex w-full h-full p-3`}>
                <div className='basis-1/4 flex justify-start items-start text-slate-200 text-xl'>
                  Color
                </div>
                <div className='flex gap-3 mt-2'>
                  <label htmlFor='color_green' className='cursor-pointer'>
                    <input
                      type='radio'
                      id='color_green'
                      name='color'
                      className='sr-only peer'
                      // checked
                    />

                    <span className='block w-6 h-6 bg-green-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300'></span>
                  </label>

                  <label htmlFor='color_blue' className='cursor-pointer'>
                    <input
                      type='radio'
                      id='color_blue'
                      name='color'
                      className='sr-only peer'
                    />
                    <span className='block w-6 h-6 bg-blue-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300'></span>
                  </label>
                  <label htmlFor='color_red' className='cursor-pointer'>
                    <input
                      type='radio'
                      id='color_red'
                      name='color'
                      className='sr-only peer'
                    />
                    <span className='block w-6 h-6 bg-red-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-yellow-600'></span>
                  </label>
                </div>
              </div>
              {/* QUANTITY  */}
              <div className={`basis-1/4 flex w-full h-full  p-3`}>
                <div className='basis-1/4 flex justify-start items-start text-slate-200 text-xl'>
                  Quantity
                </div>
                <div className='flex items-center justify-center'>
                  <div
                    className='inline-flex shadow-md hover:shadow-lg focus:shadow-lg'
                    // role='group'
                  >
                    <button
                      onClick={decrementCount}
                      type='button'
                      className='text-xl font-medium rounded-l inline-block px-6 py-2.5 bg-blue-600 text-white  leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out'
                    >
                      -
                    </button>
                    <input
                      placeholder={count}
                      type='number'
                      className=' w-20 text-black text-center'
                      onKeyDown={(event) => {
                        event.preventDefault();
                      }}
                    />
                    <button
                      onClick={incrementCount}
                      type='button'
                      className='text-xl font-medium rounded-r inline-block px-6 py-2.5 bg-blue-600 text-white leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out'
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              {/* BUTTON TO CART / BUY  */}
              <div className='basis-1/4  w-full h-full flex p-3'>
                <div className='flex gap-3'>
                  <button
                    className={`p-3 border-2 rounded-sm border-red-800 bg-rose-200 text-red-800 min-w-[150px] font-medium
                    hover:bg-white hover:border-[3px] `}
                  >
                    Add To Cart 🧺
                  </button>
                  <button
                    className={`p-3 rounded-sm bg-red-800 text-white min-w-[150px] font-medium
                    hover:bg-red-600 hover:font-bold `}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className={`w-full mt-6 bg-slate-600 min-h-[300px]`}>
          We can make this as description
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;

export const getServerSideProps = async (context) => {
  return {
    props: {
      slug: context.params.slug,
    },
  };
};
