import Head from "next/head";
import MyLayout from "../components/layouts/MyLoayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>about</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>about</h2>
        <h1></h1>
      </main>
    </div>
  );
}

Home.Layout = MyLayout;
