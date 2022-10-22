import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

const User = ({ children }) => {
  const router = useRouter();
  const [accountOpen, setAccountOpen] = useState(false);

  const accountRouteHandler = () => {
    setAccountOpen((prevState) => !prevState);
    router.push("/user/account/profile");
  };

  useEffect(() => {
    if (router.asPath === "/user/account/profile") setAccountOpen(true);
  }, [router.asPath]);

  return (
    <Layout>
      <div
        className={`w-full bg-slate-600 h-[80vh] gap-3
      flex justify-center items-center lg:px-44 lg:py-4 `}
      >
        <div className={`basis-1/5 h-full`}>
          <div
            id='drawer'
            className={`h-3/4 w-full flex flex-col bg-teal-600 `}
          >
            <div className='basis-1/5 text-lg text-white bg-red-500 '>
              <h1>User name and edit-profile</h1>
            </div>
            <div className={`basis-4/5 flex flex-col`}>
              <button
                className='hover:text-orange-500 w-full text-start '
                onClick={accountRouteHandler}
              >
                My Account
              </button>
              {accountOpen && (
                <div className={`px-2`}>
                  <div>Profile</div>
                  <div>Bank n Cards</div>
                  <div>Addresses</div>
                </div>
              )}
              <button onClick={() => router.push("/user/purchase")}>
                My Purchase
              </button>
              <div>My Vouchers</div>
              <div>My Shoplette Coins</div>
            </div>
          </div>
        </div>
        <div className={`basis-4/5 h-full bg-red-300 text-base-200 `}>
          {children}
        </div>
      </div>
    </Layout>
  );
};

export default User;
