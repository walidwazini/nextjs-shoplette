import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import ErrorSnackBar from "../components/ErrorSnackBar";
import imageUrlBuilder from "@sanity/image-url";

import Navbar from "../components/Navbar";
import client from "../utils/client";
import { urlForThumbnail } from "../utils/image";
import { getAllProducts } from "../utils/queries";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [state, setState] = useState({
    produks: [],
    errorMessage: "",
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(getAllProducts());
        console.log(products);
        setState({ produks: products, loading: false });
      } catch (err) {
        setState({ loading: false, errorMessage: err.message });
      }
    };
    fetchData();
  }, []);

  console.log(state.produks[0]?.image);

  return (
    <>
      <Head>
        <title>Shoplette</title>
      </Head>
      <Navbar />
      <div className={`flex flex-col justify-center items-center p-1 w-full`}>
        {state.loading ? (
          <div className='text-center text-lg text-white'>
            Is loading now...
          </div>
        ) : state.errorMessage ? (
          <div
            className={` h-[80vh] w-full flex flex-col justify-center items-center`}
          >
            <ErrorSnackBar errorText={state.errorMessage} />
          </div>
        ) : (
          <div
            className={`mt-8 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-0`}
          >
            {state.produks?.map((prod) => (
              <ProductCard
                title={prod.name}
                key={prod._id}
                imageSrc={prod.image}
                slug={prod.slug}
                price={prod.price}
                rating={prod.rating}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
