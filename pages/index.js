import Head from "next/head";
import Image from "next/image";
import BlackSection from "../src/components/BlackSeccion/BlackSection";
import MyLayout from "../src/components/layouts/MyLoayout";
import MyLink from "../src/components/MyLink";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>nomadas creando el camino</title>
      </Head>
      <h1>Nomadasgroup</h1>
      <h2>Pronto estará aquí</h2>
      <MyLink title="avances acá" href="/visual-guide" />
    </>
  );
}
Home.Layout = MyLayout;
