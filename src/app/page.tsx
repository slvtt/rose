"use client";

import Header from "@/components/Header/Header";
import React from "react";
import RangeComponent from "@/components/Range/RangeComponent";
import MainInfo from "@/components/MainInfo";
import Goods, { hits, news } from "@/components/Goods";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";
import Reasons from "@/components/Reasons";

export default function Home() {
  return (
    <main>
      <Header />
      <MainInfo />
      <RangeComponent />
      <Goods blockTitle="Предлагаем присмотретьcя" items={hits} />
      <Goods blockTitle="Новинки" items={news} />
      <Reasons />
      <Reviews />
      <Footer />
    </main>
  );
}
