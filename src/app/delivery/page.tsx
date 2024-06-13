"use client";
import React from "react";
import MyInput from "@/components/ui/Input/Input";
import { Button, DatePicker, Switch } from "@nextui-org/react";

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-[35px]">
        <span className="text-5xl text-[#A74D5B]">Оформление заказа</span>
        <span className="text-3xl text-[#A74D5B]">Детали заказа</span>
      </div>
      <form className=" mt-[36px] flex flex-col gap-[35px]">
        <div className="flex w-[652px] flex-col gap-[35px]">
          <MyInput
            label="Имя получателя"
            labelPlacement="outside"
            placeholder="Имя"
          />
          <MyInput
            label="Номер телефона получателя"
            labelPlacement="outside"
            placeholder="Номер телефона получателя"
          />
          <MyInput
            label="Адрес доставки"
            labelPlacement="outside"
            placeholder="Имя"
          />
          <MyInput
            label="Ваш номер телефона"
            labelPlacement="outside"
            placeholder="Ваш номер телефона"
          />
          <MyInput
            label="Имя получателя"
            labelPlacement="outside"
            placeholder="Имя получателя"
          />
          <MyInput
            label="Пожелания к заказу"
            labelPlacement="outside"
            placeholder="Пожелания к заказу"
          />
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-[16px]">
            <span className="text-[#983027] text-2xl">Ваш заказ</span>
            <span className="text-[#983027] text-2xl">Товар</span>
            <span className="text-[#983027] text-2xl">Подытог</span>
            <span className="text-[#983027] text-2xl">Доставка</span>
          </div>
          <div className="flex flex-col gap-[16px]">
            <span className="text-[#983027] text-2xl text-end">Подытог</span>
            <span className="text-[#983027] text-2xl">Цветы. Розы</span>
            <span className="text-[#983027] text-2xl text-end">7200</span>
            <span className="text-[#983027] text-2xl text-end">7800</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="text-[#983027] text-2xl">Итого к оплате</span>
          <span className="text-[#983027] text-2xl"> 15 000</span>
        </div>
        <Button className="bg-[#61000F] text-white text-xl">
          Оформить заказ
        </Button>
        <span className="w-[650px] text-[#983027]">
          *Оплата переводом или при получении заказа Ваша персональная
          информация будет использована при заказе, подробнее можно ознакомиться
          в разделе политика конфиденциальности.
        </span>
      </form>
    </div>
  );
}
