import React from "react";
import Head from "next/head";

import CartNavbar from "../components/CartNavbar";

const CartPage = () => {
  return (
    <>
      <Head>
        <title>{"Shopping Cart"}</title>
      </Head>
      <CartNavbar />
      {/*  Put inside a container  */}
      <>Your Cart</>
    </>
  );
};

export default CartPage;
