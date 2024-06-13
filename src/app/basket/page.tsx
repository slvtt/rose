"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import PlusIcon from "@/assets/icons/PlusIcon";
import HeartIcon from "@/assets/icons/HeartIcon";
import fiveItem from "@/assets/images/hits/5.png";
import sixItem from "@/assets/images/hits/6.png";
import sevenItem from "@/assets/images/hits/7.png";
import eightItem from "@/assets/images/hits/8.png";
import Empty from "@/components/Empty/Empty";

const news = [
  {
    title: "Проблески утреннего восхода",
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 1999,
    image: fiveItem.src,
  },
  {
    title: "Проблески утреннего восхода",
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 2100,
    image: sixItem.src,
  },
  {
    title: "Проблески утреннего восхода",
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 2900,
    image: sevenItem.src,
  },
  {
    title: "Проблески утреннего восхода",
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 3099,
    image: eightItem.src,
  },
];

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-[16px] ">
        <span className="text-5xl text-[#A74D5B]">Корзина</span>
        <Link href="/" className="text-xl text-[#A74D5B]">
          Вернуться в каталог
        </Link>
      </div>
      <div>
        <Empty />
      </div>
      <div>
        <span className="text-5xl text-[#A74D5B] inline-block mb-[16px]">
          Персональные рекомендации
        </span>
        <div className="flex justify-between">
          {news.map((item, index) => (
            <div className="flex flex-col" key={item.title + index}>
              <div className="mb-[28px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={279}
                  height={373}
                />
              </div>
              <span className="inline-block mb-[8px] text-[#A74D5B]">
                {item.title}
              </span>
              <span className="inline-block mb-[14px] text-[#A74D5B] text-xs">
                {item.subtitle}
              </span>
              <div className="flex justify-between">
                <div className="flex gap-[8px]">
                  <div className="flex  text-[#A74D5B] items-center justify-center text-2xl w-[90px] bg-[#FFD3DA] h-[44px] cursor-pointer rounded-md">
                    {item.price}₽
                  </div>
                  <div className="flex items-center justify-center w-[60px] bg-[#FFD3DA] h-[44px] cursor-pointer rounded-md">
                    <PlusIcon color="#A74D5B" />
                  </div>
                </div>
                <div className="flex items-center justify-center w-[60px] bg-[#FFD3DA] h-[44px] cursor-pointer rounded-md">
                  <HeartIcon color="#A74D5B" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
