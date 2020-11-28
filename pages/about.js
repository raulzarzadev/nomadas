import Head from "next/head";
import MyLayout from "../src/components/layouts/MyLoayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>about</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>about</h2>
      <h1></h1>
    </>
  );
}

Home.Layout = MyLayout;
