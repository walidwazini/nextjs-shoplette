import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import ErrorSnackBar from "../components/ErrorSnackBar";

import Navbar from "../components/Navbar";
import client from "../utils/client";
import { getAllProducts } from "../utils/queries";

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
        setState({ produks: products, loading: false });
      } catch (err) {
        setState({ loading: false, errorMessage: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Shoplette</title>
      </Head>
      <Navbar />
      <div className={`flex flex-col justify-center items-center`}>
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
          <div className={`border border-blue-700 h-[300px] w-28`}>
            {state.produks?.map((prod) => (
              <div className='text-white text-md' key={prod._id}>
                {prod.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
