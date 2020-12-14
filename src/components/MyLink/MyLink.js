import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

export default function MyLink({ variant, href, title }) {
  let style;
  switch (variant) {
    case "primary":
      style = styles.link__primary;
      break;
    case "secondary":
      style = styles.link__secondary;
      break;

    default:
      break;
  }
  return (
    <Link href={href || ""}>
      <h6>
        <a className={style || styles.link__primary}>{title || "link"}</a>
      </h6>
    </Link>
  );
}
