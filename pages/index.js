import Head from "next/head";
import Image from "next/image";
import MyLayout from "../src/components/layouts/MyLoayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Image
        priority
        src={"/main-background.jpg"}
        alt="background image"
        className={styles.background_image}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <Head>
        <title>nomadas creando el camino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>nomadasGroup pronto estara aquí</h2>
      <h1>¡Espéralo!</h1>
    </>
  );
}
Home.Layout = MyLayout;
