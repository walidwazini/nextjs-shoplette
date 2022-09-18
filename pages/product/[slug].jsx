import React, { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

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
          py-6 pl-4`}
          >
            <div className={`basis-1/3 w-full`}>
              {/* TITLE N RATING  */}
              <div
                className={`basis-1/2 flex flex-col justify-start items-start
                bg-rose-500 w-full
           `}
              >
                <h1 className='text-white  text-[2.7rem]  '>{product?.name}</h1>
                <div className={`flex justify-between items-center w-[400px]`}>
                  <div>⭐⭐⭐</div>
                  <div>raitng counts</div>
                  <div>sold counts</div>
                </div>
              </div>
              {/* PRICE  */}
              <div className='basis-1/2'>
                <div className={`mt-10 text-[3rem] text-red-500 font-medium`}>
                  RM {product?.price}
                </div>
              </div>
            </div>
            <form className={`basis-2/3 w-full flex flex-col`}>
              {/* SHIPPING  */}
              <div
                className={`basis-1/4 bg-rose-500 w-full flex justify-center items-start`}
              >
                SHIPPING
              </div>
              {/* VARIANT  */}
              <div className={`basis-1/4 flex w-full h-full bg-green-300 p-3`}>
                <div className='basis-1/4 flex justify-start items-start text-slate-500'>
                  Color
                </div>
                <div className={`grid grid-cols-4 gap-1`}>
                  <div>Maroon</div>
                  <div>Blue</div>
                  <div>Sky blue</div>
                  <div>red/black</div>
                </div>
              </div>
              {/* QUANTITY  */}
              <div className={`basis-1/4 flex w-full h-full bg-rose-300 p-3`}>
                <div className='basis-1/4 flex justify-start items-start text-slate-500'>
                  Quantity
                </div>
              </div>
              {/* BUTTON TO CART / BUY  */}
              <div className='basis-1/4 bg-green-500 w-full h-full flex p-3'>
                <button>Add To Cart 🧺</button>
                <button>Buy Now</button>
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
