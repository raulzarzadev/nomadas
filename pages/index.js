import Head from "next/head";
import MyLayout from "../components/layouts/MyLoayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>nomadas creando el camino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>nomadasGroup pronto estara aquí</h2>
        <h1>¡Espéralo!</h1>
      </main>

    </div>
  );
}
Home.Layout = MyLayout;
