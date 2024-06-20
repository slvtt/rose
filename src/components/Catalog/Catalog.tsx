"use client";
import React from "react";
import { categories } from "@/components/Catalog/_mocks";
import Item from "@/components/Catalog/components/Item";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "@/store/basketSlice/backetSlice";

interface CatalogProps {}

const Catalog: React.FC<CatalogProps> = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-[56px] w-full">
      {categories.map((category) => (
        <div key={category.title}>
          <span className="text-[56px] text-center">{category.title}</span>
          <div className="grid grid-cols-4 gap-[24px]">
            {category.items.map((item) => (
              <Item
                key={item.name}
                name={item.name}
                id={item.id}
                onRemoveItem={() => dispatch(removeItem(item))}
                onAddToBasket={() => dispatch(addItem(item))}
                price={item.price}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Catalog;
