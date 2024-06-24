"use client";

import React from "react";
import RangeComponent from "@/components/Range/RangeComponent";
import MainInfo from "@/components/MainInfo";
import Goods, { hits, news } from "@/components/Goods";
import Reviews from "@/components/Reviews";
import Reasons from "@/components/Reasons";

export default function Home() {
  return (
    <section>
      <MainInfo />
      <RangeComponent />
      <Goods
        blockTitle="Предлагаем присмотретьcя"
        items={hits}
        linkId="good1"
      />
      <Goods blockTitle="Новинки" items={news} />
      <Reasons />
      <Reviews />
    </section>
  );
}
