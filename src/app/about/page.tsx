"use client";
import React from "react";

export default function About() {
  return (
    <div className="flex flex-col gap-[36px]">
      <p className="text-[48px]">О магазине</p>
      <div className="flex-col flex gap-[16px]">
        <p className="text-[28px]">СПОСОБЫ ОПЛАТЫ</p>
        <span className="text-[20px]">
          Наличными или банковской картой в магазине;
        </span>
        <span className="text-[20px]">
          Наличными или банковской картой курьеру;
        </span>
      </div>
      <div className="flex-col flex gap-[16px]">
        <p className="text-[28px]">ДОСТАВКА</p>
        <span className="text-[20px]">
          Мы делаем бесплатную доставку в пределах города(отдаленные районы
          платно) с интервалом в 1-2 часа.
        </span>
        <span className="text-[20px]">Доставка с 8:00 до 9:00 – 250 руб.</span>
        <span className="text-[20px]">
          Ночная доставка с 22 до 8 – 250 руб.*
        </span>
        <span className="text-[20px]">
          Доставка в отдаленные районы всегда платная и тарифицируется по
          километражу, но минимум 400 руб.
        </span>
      </div>
      <div className="flex-col flex gap-[16px]">
        <p className="text-[28px]">АДРЕС</p>
        <span className="text-[20px]">
          Россия, г.Ульяновск, 2-й переулок Мира, д.11
        </span>
      </div>
    </div>
  );
}
