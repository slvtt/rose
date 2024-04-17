import React from "react";
import Image from "next/image";
import { it } from "node:test";
import HeartIcon from "@/assets/icons/HeartIcon";
import PlusIcon from "@/assets/icons/PlusIcon";

interface GoodsProps {
  items: Array<{
    image: string;
    title: string;
    subtitle: string;
    price: number;
  }>;
  blockTitle: string;
}

export const hits = [
  {
    title: "Проблески утреннего восхода",
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 2100,
    image:
      "https://i.pinimg.com/564x/81/bc/d2/81bcd29a208b910f09e836302f616282.jpg",
  },
  {
    title: "Проблески утреннего восхода",
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 2100,
    image:
      "https://i.pinimg.com/564x/81/bc/d2/81bcd29a208b910f09e836302f616282.jpg",
  },
  {
    title: "Проблески утреннего восхода",
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 2100,
    image:
      "https://i.pinimg.com/564x/81/bc/d2/81bcd29a208b910f09e836302f616282.jpg",
  },
  {
    title: "Проблески утреннего восхода",
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 2100,
    image:
      "https://i.pinimg.com/564x/81/bc/d2/81bcd29a208b910f09e836302f616282.jpg",
  },
];

export const news = [
  {
    title: "Проблески утреннего восхода",
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 2100,
    image:
      "https://i.pinimg.com/564x/81/bc/d2/81bcd29a208b910f09e836302f616282.jpg",
  },
  {
    title: "Проблески утреннего восхода",
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 2100,
    image:
      "https://i.pinimg.com/564x/81/bc/d2/81bcd29a208b910f09e836302f616282.jpg",
  },
  {
    title: "Проблески утреннего восхода",
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 2100,
    image:
      "https://i.pinimg.com/564x/81/bc/d2/81bcd29a208b910f09e836302f616282.jpg",
  },
  {
    title: "Проблески утреннего восхода",
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 2100,
    image:
      "https://i.pinimg.com/564x/81/bc/d2/81bcd29a208b910f09e836302f616282.jpg",
  },
];

const Goods: React.FC<GoodsProps> = ({ items, blockTitle }) => {
  return (
    <div className="container mx-auto mt-[80px]">
      <h3 className="text-6xl mb-[60px] text-[#A74D5B]">{blockTitle}</h3>
      <div className="flex justify-between">
        {items.map((item, index) => (
          <div className="flex flex-col" key={item.title + index}>
            <div className="border-[#890909] border-solid border-2 mb-[28px]">
              {" "}
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
  );
};

export default Goods;
