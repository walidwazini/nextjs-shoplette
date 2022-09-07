import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SearchSVG from "../components/svg/SearchSVG";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shoplette</title>
      </Head>
      <Navbar />
      <div>
        <h1 className='text-lg text-white'>Body</h1>
        <div className={`h-[100vh] w-10 bg-blue-600`}>asdas</div>
      </div>
    </>
  );
}
