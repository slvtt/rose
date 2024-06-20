import React from "react";
import Image from "next/image";
import { addItem, removeItem } from "@/store/basketSlice/backetSlice";
import PlusIcon from "@/assets/icons/PlusIcon";
import HeartIcon from "@/assets/icons/HeartIcon";
import { useDispatch } from "react-redux";
import { useSelector } from "@/store/hooks";

interface GoodItemProps {
  item: any;
}

const GoodItem: React.FC<GoodItemProps> = ({ item }) => {
  const store = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  const itemInBasketCount = store.items.find(
    (flowers) => flowers.flower.id === item.id,
  )?.count;

  return (
    <div className="flex flex-col">
      <div className="mb-[28px]">
        <Image src={item.image} alt={item.title} width={279} height={373} />
      </div>

      <span className="inline-block mb-[8px] text-[#A74D5B]">{item.title}</span>
      <span className="inline-block mb-[14px] text-[#A74D5B] text-xs">
        {item.subtitle}
      </span>
      <div className="flex justify-between">
        <div className="flex gap-[8px] items-center">
          <div className="flex  text-[#A74D5B] items-center justify-center text-2xl w-[90px] bg-[#FFD3DA] h-[44px] cursor-pointer rounded-md">
            {item.price}₽
          </div>
          {itemInBasketCount && itemInBasketCount > 0 ? (
            <>
              <div
                className="flex items-center justify-center w-[20px] bg-[#FFD3DA] h-[20px] cursor-pointer rounded-md text-[26px]"
                onClick={() =>
                  dispatch(
                    removeItem({
                      name: item.title,
                      id: item.id,
                      price: item.price,
                    }),
                  )
                }
              >
                -
              </div>
              <span className="text-[22px]">{itemInBasketCount}шт.</span>
            </>
          ) : null}
          <div
            className="flex items-center justify-center w-[20px] bg-[#FFD3DA] h-[20px] cursor-pointer rounded-md"
            onClick={() =>
              dispatch(
                addItem({
                  name: item.title,
                  id: item.id,
                  price: item.price,
                }),
              )
            }
          >
            <PlusIcon color="#A74D5B" />
          </div>
        </div>
        <div className="flex items-center justify-center w-[60px] bg-[#FFD3DA] h-[44px] cursor-pointer rounded-md">
          <HeartIcon color="#A74D5B" />
        </div>
      </div>
    </div>
  );
};

export default GoodItem;
