import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { CgFileDocument } from "react-icons/cg";
import { RiCoinLine } from "react-icons/ri";
import { useSelector } from "react-redux";

import Layout from "../../components/Layout";

const profileRoute = "/user/account/profile";
const addressesRoute = "/user/account/addresses";

const User = ({ children }) => {
  const sampleAvatar = "https://www.w3schools.com/howto/img_avatar.png";
  const router = useRouter();
  const [mount, setMount] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const { userInfo, isAuthenticated } = useSelector((state) => state.user);

  const accountRouteHandler = () => {
    setAccountOpen(true);
    router.push("/user/account/profile");
  };

  const openMyAccount =
    router.asPath === profileRoute || router.asPath === addressesRoute;

  useEffect(() => {
    setMount(true);
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router, isAuthenticated]);

  useEffect(() => {
    if (openMyAccount) {
      setAccountOpen(true);
    } else {
      setAccountOpen(false);
    }
  }, [router.asPath]);

  const NavButton = ({ onClick, icon, title }) => (
    <button
      className={`w-full text-start flex items-center gap-2 
             text-xs md:text-sm  hover:text-orange-500 font-semibold text-black `}
      onClick={onClick}
    >
      {icon}
      <div>{title}</div>
    </button>
  );

  const AccChildBtn = ({ route, title }) => (
    <div
      onClick={() => router.push(route)}
      className={`text-sm hover:cursor-pointer ${
        router.pathname === route && `text-red-600`
      } `}
    >
      {title}
    </div>
  );

  return (
    <Layout>
      <div
        className={`w-full bg-slate-600 h-[80vh] gap-1 lg:gap-3
      flex justify-center items-center px-4 md:px-14 lg:px-40 py-2 lg:py-4 `}
      >
        <div className={`basis-1/5 h-full`}>
          <div
            id='drawer'
            className={`h-3/4 w-full flex flex-col bg-[#f3f3f5] p-2 `}
          >
            <div
              className={`basis-1/5 flex justify-evenly items-center text-black  `}
            >
              {mount && (
                <>
                  <img
                    className={`mt-2 rounded-full h-10 `}
                    alt='profile_image'
                    src={sampleAvatar}
                  />
                  <h1>{userInfo.name}</h1>
                </>
              )}
            </div>
            <div className={`basis-4/5 flex flex-col py-1 gap-2 `}>
              <NavButton
                // onClick={accountRouteHandler}
                onClick={() => setAccountOpen((prevState) => !prevState)}
                icon={<IoMdPerson className={"text-blue-600"} />}
                title='My Account'
              />
              {accountOpen && (
                <div className={`p-2 flex flex-col gap-2 text-sm `}>
                  <AccChildBtn route={profileRoute} title={"Profile"} />
                  <AccChildBtn route={addressesRoute} title={"Addresses"} />
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
        <div className={`basis-4/5 h-full bg-blue-200 text-base-200 `}>
          {children}
        </div>
      </div>
    </Layout>
  );
};

export default User;
