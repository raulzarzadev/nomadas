import Head from "next/head";
import Link from "next/link";
import React from "react";
import MyLayout from "../src/components/layouts/MyLoayout";
import VisualGuideGrid from "../src/components/VisualGuide/VisualGuideGrid";

export default function VisualGuide() {
  return (
    <>
      <Head>
        <title>guía viusal</title>
      </Head>
      <VisualGuideGrid/>
    </>
  );
}

VisualGuide.Layout = MyLayout;
