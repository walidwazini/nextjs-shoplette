import Head from "next/head";
import React, { useContext } from "react";
import { Store } from "../utils/store";
import Navbar from "./Navbar";

const Layout = ({ title, description, children }) => {
  const { state, dispatch } = useContext(Store);

  // ! Pass the state info into Navbar
  const { darkMode } = state;

  return (
    <>
      <Head>
        <title>{title ? `${title} - Shoplette` : "Shoplette"}</title>
        {description && <meta name='description' content={description}></meta>}
      </Head>

      <Navbar />
      {/*  Put inside a container  */}
      {children}
    </>
  );
};

export default Layout;
