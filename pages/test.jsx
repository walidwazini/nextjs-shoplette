import React from "react";
import Layout from "../components/Layout";
import XLogo from "../components/svg/xlogo.svg";

const Test = () => {
  return (
    <Layout>
      <h1>Terst Page</h1>
      <div>
        <XLogo className='text-9xl' />
      </div>
    </Layout>
  );
};

export default Test;
