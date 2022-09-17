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
          py-6 pl-14`}
          >
            <h1 className='text-white  text-[4rem]  '>{product?.name}</h1>
            <div className={`text-gray-400 text-2xl`}>
              {product?.description}
            </div>
            <div className={`mt-10 text-[3rem] text-red-500 font-medium`}>
              RM {product?.price}
            </div>
          </div>
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
