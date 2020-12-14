import Head from "next/head";
import Image from "next/image";
import BlackSection from "../src/components/BlackSeccion/BlackSection";
import MyLayout from "../src/components/layouts/MyLoayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>nomadas creando el camino</title>
      </Head>
      <h1>Nomadasgroup</h1>
      <h2>Nomadasgroup</h2>
      <BlackSection />
      <h1></h1>
      <BlackSection />
      <BlackSection />
      <BlackSection />
      <BlackSection />
      <BlackSection />
    </>
  );
}
Home.Layout = MyLayout;
