import React from "react";
import HeartIcon from "@/assets/icons/HeartIcon";
import { useSelector } from "@/store/hooks";
import Image from "next/image";

interface ItemProps {
  name: string;
  id: number;
  image: string;
  price: number;
  onAddToBasket: () => void;
  onRemoveItem: () => void;
}

const Item: React.FC<ItemProps> = ({
  name,
  price,
  image,
  id,
  onAddToBasket,
  onRemoveItem,
}) => {
  const store = useSelector((store) => store.basket);
  const itemInBasketCount = store.items.find(
    (item) => item.flower.id === id,
  )?.count;

  return (
    <div className="flex flex-col gap-[16px] max-w-[319px]">
      <div className="w-[319px] h-[397px] relative overflow-hidden">
        <Image src={image} alt={"name"} fill />
      </div>
      <div className="flex flex-col gap-[8px]">
        <span className="text-[24px] min-h-[80px]">{name}</span>
        <div className="flex justify-between w-full items-center">
          <div className="flex gap-[16px] items-center">
            <span className="text-[24px]">{price}₽</span>
            {itemInBasketCount && itemInBasketCount > 0 ? (
              <>
                <button
                  className="text-[26px] w-[40px] h-[40px] bg-[#cd949d] text-[white] rounded-xl"
                  onClick={onRemoveItem}
                >
                  -
                </button>
                <span className="text-[22px]">{itemInBasketCount}шт.</span>
              </>
            ) : null}
            <button
              className="text-[26px] w-[40px] h-[40px] bg-[#cd949d] text-[white] rounded-xl"
              onClick={onAddToBasket}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
