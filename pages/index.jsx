import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ErrorSnackBar from "../components/ErrorSnackBar";
import client from "../utils/client";
import { getAllProducts } from "../utils/queries";
import ProductCard from "../components/ProductCard";
import Layout from "../components/Layout";
import { fetchProducts } from "../store/product-slice";

const Home = () => {
  const [state, setState] = useState({
    produks: [],
    errorMessage: "",
    loading: true,
  });

  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product);
  const { items: productsList, loading, errorMessage } = productState;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const products = await client.fetch(getAllProducts());
  //       setState({ produks: products, loading: false });
  //     } catch (err) {
  //       setState({ loading: false, errorMessage: err.message });
  //     }
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Layout>
      <div className={`flex flex-col justify-center items-center p-1 w-full`}>
        {loading ? (
          <div className='text-center mt-20 text-lg text-white'>
            Is loading now...
          </div>
        ) : errorMessage ? (
          <div
            className={` h-[80vh] w-full flex flex-col justify-center items-center`}
          >
            <ErrorSnackBar errorText={errorMessage} />
          </div>
        ) : (
          <div
            className={`mt-8
             grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-0
            `}
          >
            {productsList?.map((prod) => (
              <ProductCard
                title={prod.name}
                key={prod._id}
                imageSrc={prod.image}
                // slug={prod.slug}
                id={prod.slug}
                price={prod.price}
                rating={prod.rating}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
