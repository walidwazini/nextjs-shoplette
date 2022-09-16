import React, { useEffect, useState } from "react";
import client from "../../utils/client";

const ProductDetails = (props) => {
  const { slug } = props;
  const { state, setState } = useState({
    product: null,
    loading: true,
    errorMessage: "",
  });
  const { product, loading, errorMessage } = state;

  return (
    <div>
      <h1 className='text-white text-lg'>Hello Sarah</h1>
    </div>
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
