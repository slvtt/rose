import React from "react";
import Image from "next/image";
import HeartIcon from "@/assets/icons/HeartIcon";
import PlusIcon from "@/assets/icons/PlusIcon";
import firstItem from "@/assets/images/hits/1.png";
import secondItem from "@/assets/images/hits/2.png";
import thirdItem from "@/assets/images/hits/3.png";
import fourItem from "@/assets/images/hits/4.png";
import fiveItem from "@/assets/images/hits/5.png";
import sixItem from "@/assets/images/hits/6.png";
import sevenItem from "@/assets/images/hits/7.png";
import eightItem from "@/assets/images/hits/8.png";
import { useDispatch } from "react-redux";
import { addItem } from "@/store/basketSlice/backetSlice";
import GoodItem from "@/components/GoodItem/GoodItem";

interface GoodsProps {
  items: Array<{
    image: string;
    title: string;
    id: number;
    subtitle: string;
    price: number;
  }>;
  blockTitle: string;
}

export const hits = [
  {
    title: "Проблески утреннего восхода",
    id: 1,
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 2100,
    image: firstItem.src,
  },
  {
    title: "Проблески утреннего восхода",
    id: 2,
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 2200,
    image: secondItem.src,
  },
  {
    title: "Проблески утреннего восхода",
    id: 3,
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 1500,
    image: thirdItem.src,
  },
  {
    title: "Проблески утреннего восхода",
    id: 4,
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 1650,
    image: fourItem.src,
  },
];

export const news = [
  {
    title: "Проблески утреннего восхода",
    id: 5,
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 1999,
    image: fiveItem.src,
  },
  {
    title: "Проблески утреннего восхода",
    id: 6,
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 2100,
    image: sixItem.src,
  },
  {
    title: "Проблески утреннего восхода",
    id: 7,
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 2900,
    image: sevenItem.src,
  },
  {
    title: "Проблески утреннего восхода",
    id: 8,
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 3099,
    image: eightItem.src,
  },
];

const Goods: React.FC<GoodsProps> = ({ items, blockTitle }) => {
  const dispatch = useDispatch();
  return (
    <div className="container mx-auto mt-[80px]">
      <h3 className="text-6xl mb-[60px] text-[#A74D5B]">{blockTitle}</h3>
      <div className="flex justify-between">
        {items.map((item, index) => (
          <GoodItem item={item} key={item.title + index} />
        ))}
      </div>
    </div>
  );
};

export default Goods;
