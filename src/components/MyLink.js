import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function MyLink({ className, href, children }) {
  return (
    <Link href={href || ""}>
      <a className={styles.link}>{children}</a>
    </Link>
  );
}
