import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { CgFileDocument } from "react-icons/cg";
import { RiCoinLine } from "react-icons/ri";
import Link from "next/link";

import Layout from "../../components/Layout";

const User = ({ children }) => {
  const router = useRouter();
  const [accountOpen, setAccountOpen] = useState(false);

  const accountRouteHandler = () => {
    setAccountOpen((prevState) => !prevState);
    router.push("/user/account/profile");
  };

  const openMyAccount =
    router.asPath === "/user/account/profile" || "/user/account/addresses";

  useEffect(() => {
    if (openMyAccount) setAccountOpen(true);
  }, [router.asPath]);

  const NavButton = ({ onClick, icon, title }) => (
    <button
      className={`w-full bg-red-600 text-start flex items-center gap-2 
             text-xs md:text-sm  hover:text-orange-500 font-semibold text-black `}
      onClick={onClick}
    >
      {icon}
      <div>{title}</div>
    </button>
  );

  return (
    <Layout>
      <div
        className={`w-full bg-slate-600 h-[80vh] gap-1 lg:gap-3
      flex justify-center items-center px-10 md:px-28 lg:px-40 lg:py-4 `}
      >
        <div className={`basis-1/5 h-full`}>
          <div
            id='drawer'
            className={`h-3/4 w-full flex flex-col bg-teal-200 p-2 `}
          >
            <div className='basis-1/5 text-lg text-white bg-red-500 '>
              <h1>User name and edit-profile</h1>
            </div>
            <div className={`basis-4/5 flex flex-col py-1 gap-2 `}>
              {/* <button
                className={`w-full text-start flex items-center gap-2 
                hover:text-red-500 font-semibold text-blue-600 `}
                onClick={accountRouteHandler}
              >
                <IoMdPerson className={"text-blue-600"} />
                My Account
              </button> */}
              <NavButton
                onClick={accountRouteHandler}
                icon={<IoMdPerson className={"text-blue-600"} />}
                title='My Account'
              />
              {accountOpen && (
                <div className={`px-2 text-sm `}>
                  {/* <div>Profile</div> */}
                  {/* <Link
                    className='active:text-red-600'
                    href={"/user/account/profile"}
                  >
                    Profile 1
                  </Link> */}
                  <div
                    onClick={() => router.push("/user/account/profile")}
                    className={`text-sm hover:cursor-pointer ${
                      router.pathname === "/user/account/profile" &&
                      `text-red-600`
                    } `}
                  >
                    Profile
                  </div>
                  <div>Bank n Cards</div>
                  <div
                    onClick={() => router.push("/user/account/addresses")}
                    className={`text-sm hover:cursor-pointer ${
                      router.pathname === "/user/account/addresses" &&
                      `text-red-600`
                    } `}
                  >
                    Addresses
                  </div>
                </div>
              )}
              <NavButton
                onClick={() => router.push("/user/purchase")}
                icon={<CgFileDocument className={"text-blue-600"} />}
                title='My Purchase'
              />

              {/* <div>My Vouchers</div> */}
              <NavButton
                onClick={() => {}}
                icon={<RiCoinLine className={"text-yellow-600"} />}
                title='My Shoplette Coins'
              />
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
