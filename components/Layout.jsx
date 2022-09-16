import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";

const Layout = ({ title, description, children }) => {
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
