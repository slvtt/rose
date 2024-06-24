"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import sixItem from "@/assets/images/hits/6.png";
import Basket from "@/components/Basket/Basket";
import { useSelector } from "@/store/hooks";
import { useDispatch } from "react-redux";
import {
  addItem,
  clearBasket,
  removeItem,
} from "@/store/basketSlice/backetSlice";
import { Button } from "@nextui-org/react";

const news = [
  {
    title: "Проблески утреннего восхода",
    id: 15454,
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 1999,
    image:
      "https://sun9-79.userapi.com/impg/eXSBL4XzWvmpnOA8r0cFTFZYaA_mcSJM_4OkiQ/_B7NmDLo0q0.jpg?size=510x680&quality=95&sign=818fec586cb8b003703835b33272e91d&c_uniq_tag=I2AaEz08U2TkAQSnq-B4Uvl3vSjnzuF4y2c7mckjv5U&type=album",
  },
  {
    title: "Проблески утреннего восхода",
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 2100,
    id: 2100,
    image: sixItem.src,
  },
  {
    title: "Проблески утреннего восхода",
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 2900,
    id: 2900,
    image:
      "https://sun9-30.userapi.com/impg/HnG1D7PZPIBClQDCFGoNd5VokrsxXuWlUGFZ-g/l-ShyyxwIPc.jpg?size=510x680&quality=95&sign=7ec8d7ba71eeacd445894f245f04acc0&c_uniq_tag=Qha5ECZaaNJsVsliKJbDg28FvqG7tOnrzyFDQyabNLg&type=album",
  },
  {
    title: "Проблески утреннего восхода",
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 3099,
    id: 3099,
    image:
      "https://sun9-61.userapi.com/impg/oRtnZfrUJChFXL3uwKJ3h_4otQJVCb_uClSxGQ/b4ivy2VLAko.jpg?size=510x680&quality=95&sign=ca496f5553a11608c46b8f10ce33a2d4&c_uniq_tag=il1CwbyQUSPkxqVrWlP9tZ3HD5tuH5PN-eIOKKSW-7c&type=album",
  },
];

export default function Page() {
  const store = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-[16px] ">
        <div className="flex justify-between items-center">
          <span className="text-5xl text-[#A74D5B]">Корзина</span>
          <Button
            className="bg-[#61000F] text-white text-[18px] h-[50px] w-[180px]"
            onClick={() => dispatch(clearBasket())}
          >
            Очистить корзину
          </Button>
        </div>

        <Link href="/" className="text-xl text-[#A74D5B]">
          Вернуться в каталог
        </Link>
      </div>
      <div>
        <Basket />
      </div>
      <div>
        <span className="text-5xl text-[#A74D5B] inline-block mb-[16px]">
          Персональные рекомендации
        </span>
        <div className="flex justify-between">
          {news.map((item, index) => {
            const itemInBasketCount = store.items.find(
              (flowers) => flowers.flower.id === item.id,
            )?.count;

            return (
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
                    {itemInBasketCount && itemInBasketCount > 0 ? (
                      <>
                        <button
                          className="text-[26px] w-[40px] h-[40px] bg-[#cd949d] text-[white] rounded-xl"
                          onClick={() =>
                            dispatch(
                              removeItem({
                                name: item.title,
                                id: item.id,
                                price: item.price,
                                image: item.image,
                              }),
                            )
                          }
                        >
                          -
                        </button>
                        <span className="text-[22px]">
                          {itemInBasketCount}шт.
                        </span>
                      </>
                    ) : null}
                    <button
                      className="text-[26px] w-[40px] h-[40px] bg-[#cd949d] text-[white] rounded-xl"
                      onClick={() =>
                        dispatch(
                          addItem({
                            name: item.title,
                            id: item.id,
                            price: item.price,
                            image: item.image,
                          }),
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
