import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const CheckoutScreen = () => {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className='container mx-auto mt-10 w-full flex justify-center '>
        Checkout
      </div>
    </>
  );
};

export default CheckoutScreen;
