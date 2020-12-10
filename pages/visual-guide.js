import Head from "next/head";
import Link from "next/link";
import React from "react";
import MyLayout from "../src/components/layouts/MyLoayout";
import MyLink from "../src/components/MyLink";
import styles from "../styles/Home.module.css";

export default function VisualGuide() {
  return (
    <>
      <Head>
        <title>guía viusal</title>
      </Head>
      <div className={styles.guide}>
        <h1>Guia visual</h1>
        <div className={styles.guide__grid}>
          <div className={styles.guide__grid_item}>
            <MyLink href="">NEXT link</MyLink>
          </div>
          <div className={styles.guide__grid_item}>
            <button className={styles.btn}>Nomada button</button>
          </div>
          <div className={styles.guide__grid_item}>
            <button className={styles.btn_secondary}>boton secundario</button>
          </div>
          <div className={styles.guide__grid_item}></div>
          <div className={styles.guide__grid_item}></div>
          <div className={styles.guide__grid_item}></div>
          <div className={styles.guide__grid_item}></div>
          <div className={styles.guide__grid_item}></div>
          <div className={styles.guide__grid_item}></div>
          <div className={styles.guide__grid_item}></div>
          <div className={styles.guide__grid_item}></div>
        </div>
      </div>
    </>
  );
}

VisualGuide.Layout = MyLayout;
