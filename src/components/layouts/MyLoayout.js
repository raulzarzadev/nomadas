import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import Image from "next/image";
import MyLink from "../MyLink";

export default function MyLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/NOMADA-BLANCO.ico" />
      </Head>
      <section>
        <header className={styles.header}>
          <div className={styles.header__item}>
            <div className={styles.header__logo}>
              <Image
                src="/images/negro.png"
                objectFit="contain"
                alt="img"
                width={140}
                height={80}
              />
            </div>
          </div>
          <div className={styles.header__item}>
            <nav className={styles.nav}>
              <ul className={styles.nav__list}>
                <li className={styles.nav__list_link}>
                  <MyLink href="/" title="home" />
                </li>
                <li className={styles.nav__list_link}>
                  <MyLink href="/about" title="acerca de " />
                </li>
                <li className={styles.nav__list_link}>
                  <MyLink href="/contact" title="contacto" />
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </section>

      <main className={styles.main}>
        <Image
          priority
          src={"/images/NOMADAFLECHAS_BLANCO.png"}
          alt="background image"
          className={styles.background_image}
          layout="fill"
          objectFit="cover"
          quality={50}
        />
        <section className={styles.container}>{children}</section>
      </main>
      <footer className={styles.footer}>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__list_link}>
              <MyLink href="/" title="home" />
            </li>
            <li className={styles.nav__list_link}>
              <MyLink href="/about" title="acerca de " />
            </li>
            <li className={styles.nav__list_link}>
              <MyLink href="/contact" title="contacto " />
            </li>
            <li className={styles.nav__list_link}>
              <MyLink href="/visual-guide" title="guia visual" />
            </li>
          </ul>
        </nav>
        <div>
          <Image
            src="/images/negro.png"
            objectFit="contain"
            alt="img"
            width={140}
            height={80}
          />
        </div>
        <div>
          <p>
            Sitio creado por:{" "}
            <address>
              <MyLink href="https://raulzarza.com" title="Raúl Zarza"></MyLink>
              <dd style={{ display: "none" }}>
                Esta es la dirección del creador de esta web page
              </dd>
            </address>
          </p>
        </div>
      </footer>
    </>
  );
}
