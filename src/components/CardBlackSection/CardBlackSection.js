import React from "react";
import Image from "next/image";
import style from "./style.module.css";
import MyLink from "../MyLink";
export default function CardBlackSection() {
  return (
    <div className={style.card}>
      <div className={style.card__image}>
        <Image
          className={style.card__image}
          src={"/images/balandra.jpg"}
          objectFit="cover"
          alt={"image"}
          height="300"
          width="300"
        />
      </div>
      <div className={style.card__content}>
        <div className={style.card__content_link}>card link</div>
        <div className={style.card__content_title}>title card</div>
        <div className={style.card__content_description}>description card</div>
      </div>
      <div className={style.card__details}>
        Sit aute non amet nisi culpa id reprehenderit enim.re reprehenderit.
        Officia eiusmod anim Lorem cillum do.
        <div className={style.card__action}>
          <MyLink title="primary link" />
          <MyLink title="secondary link" variant="secondary" />
        </div>
      </div>
    </div>
  );
}
