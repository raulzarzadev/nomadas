import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function MyLayout({ children }) {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon" />
      </Head>
      <section>
        <header className={styles.header}>
          <div className={styles.header__item}>
            <img src="" alt="img" />
          </div>
          <div className={styles.header__item}>
            <nav className={styles.nav}>
              <ul className={styles.nav__list}>
                <li className={styles.nav__list_link}>
                  <Link href="/">home</Link>
                </li>
                <li className={styles.nav__list_link}>
                  <Link href="/acerca">acerca de </Link>
                </li>
                <li className={styles.nav__list_link}>
                  <Link href="/experiencias">experiencias</Link>
                </li>
                <li className={styles.nav__list_link}>
                  <Link href="/tours">tours</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <button onClick={() => setCounter(counter + 1)}>
          Clicked {counter} Times
        </button>
      </section>

      {children}

      <footer className={styles.footer}>
        <div>
          <p>
            Sitio creado por:{" "}
            <address>
              <a href="https://raulzarza.com">
                <strong>Raúl Zarza</strong>
              </a>
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
