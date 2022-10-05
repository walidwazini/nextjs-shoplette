import React from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";

import CartNavbar from "../components/CartNavbar";

const CartPage = () => {
  const cartState = useSelector((state) => state.cart);
  const { items, totalQuantity, totalProduct, totalAmount } = cartState;
  console.log(items);

  return (
    <>
      <Head>
        <title>{"Shopping Cart"}</title>
      </Head>
      <CartNavbar />
      {/*  Put inside a container  */}
      <>Your Cart</>
      {items.length === 0 && (
        <div className=' flex text-center mt-10'>
          <h1>Your cart is empty</h1>
        </div>
      )}
      {items.length > 0 && (
        <h1>You have {cartState.items.length} item in your cart</h1>
      )}
    </>
  );
};

export default CartPage;
