import React from "react";
import { useSelector } from "@/store/hooks";
import { useDispatch } from "react-redux";
import Empty from "@/components/Empty/Empty";
import Item from "@/components/Catalog/components/Item";
import { addItem, removeItem } from "@/store/basketSlice/backetSlice";

interface BasketProps {}

const Basket: React.FC<BasketProps> = () => {
  const store = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  const totalPrice = store.items.reduce((prev, next) => {
    if (next.count) {
      const price = next.count * next.flower.price;
      return prev + price;
    }
    return prev;
  }, 0);

  if (store.items.length === 0) return <Empty />;

  return (
    <div className="">
      <span className="text-[36px] inline-block mt-[24px]">
        Итого:{totalPrice}₽
      </span>
      <div className="grid grid-cols-4 gap-[24px] mb-[24px]">
        {store.items.map((item) => (
          <Item
            name={item.flower.name}
            id={item.flower.id}
            key={item.flower.id}
            price={item.flower.price}
            onRemoveItem={() => dispatch(removeItem(item.flower))}
            onAddToBasket={() => dispatch(addItem(item.flower))}
          />
        ))}
      </div>
    </div>
  );
};

export default Basket;
