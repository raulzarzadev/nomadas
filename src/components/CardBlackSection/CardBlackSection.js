import React from "react";
import Image from "next/image";
import style from "./style.module.css";
import MyLink from "../MyLink";
export default function CardBlackSection({
  title = "title",
  description = "description",
  details = "details",
  linkPrimary,
  linkSecondary,
  image,
}) {
  return (
    <div className={style.card}>
      <div className={style.card__image}>
        <Image
          className={style.card__image}
          src={image || "/"}
          objectFit="cover"
          alt={"card-image"}
          height="300"
          width="300"
        />
      </div>
      <div className={style.card__content}>
        <div className={style.card__content_resume}>
          <div className={style.card__content_resume_title}>{title}</div>
          <div className={style.card__content_resume_description}>
            {description.length > 80
              ? description.slice(0, 80) + "..."
              : description}
          </div>
          <div className={style.card__content_resume_icons}>
            <div>icono tours</div>
            <div>icono hosp</div>
            <div>icono eco</div>
          </div>
        </div>
        <div className={style.card__content_details}>
          {details.length > 120 ? details.slice(0, 100) + "..." : details}
          <div className={style.card__content_details_actions}>
            {linkPrimary && (
              <MyLink title={linkPrimary.title} href={linkPrimary.href} />
            )}
            {linkSecondary && (
              <MyLink
                title={linkSecondary.title}
                href={linkSecondary.href}
                variant="secondary"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
