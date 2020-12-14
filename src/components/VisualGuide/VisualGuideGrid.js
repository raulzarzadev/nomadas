import React from "react";
import CardBlackSection from "../CardBlackSection";
import MyLink from "../MyLink";
import styles from "./guide.module.css";

export default function VisualGuideGrid() {
  return (
    <>
      <div className={styles.guide}>
        <h1>Guia visual</h1>
        <div className={styles.guide__grid}>
          <div className={styles.guide__grid_item}>
            <MyLink variant="secondary" href="" title="Secondary Link" />
          </div>
          <div className={styles.guide__grid_item}>
            <div>
              <MyLink variant="primary" href="" title="Primary Link" /> <br />
            </div>
          </div>
          <div className={styles.guide__grid_item}>
            <button className="btn">Nomada button</button>
          </div>
          <div className={styles.guide__grid_item}>
            <button className="btn2">boton secundario</button>
          </div>
          <div className={styles.guide__grid_item}>
            <div>
              <h1>h1 Nomadas</h1>
              <h2>h2 Nomadas</h2>
              <h3>h3 Nomadas</h3>
              <h4>h4 Nomadas</h4>
              <h5>h5 Nomadas</h5>
              <p>p Nomadas</p>
              <h6>p2 Nomadas</h6>
            </div>
          </div>
          <div className={styles.guide__grid_item}>
            <CardBlackSection
              image="/images/balandra.jpg"
              title="Card de prueba"
              description="Ex aute pariatur voluptate do ullamco. wecwecwec cew  creev reerv  ecwwe cwe cwe dew edwed"
              details="Dolore culpa aliqua non enim non veniam nostrud elit esse excepteur in consectetur. Consectetur labore ex laborum et ex occaecat. Eiusmod exercitation elit labore labore voluptate ea cupidatat commodo commodo nisi officia."
              linkPrimary={{ href: "/", title: "conocenos" }}
              linkSecondary={{ href: "/", title: "llamanos" }}
            />
          </div>
          <div className={styles.guide__grid_item}></div>
        </div>
      </div>
    </>
  );
}
