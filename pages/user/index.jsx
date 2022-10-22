import React from "react";
import Layout from "../../components/Layout";

const User = ({ children }) => {
  return (
    <Layout>
      <div className='w-full h-[600px] flex flex-col justify-start items-center p-4'>
        <h1 className='text-lg text-white'>User Profile</h1>
        <div className='mt-3 rounded-md w-[800px] h-3/4 bg-red-300 text-base-200 '>
          {children}
        </div>
      </div>
    </Layout>
  );
};

export default User;
