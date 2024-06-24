"use client";
import React from "react";
import MyInput from "@/components/ui/Input/Input";
import { Button, Tooltip } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
import Link from "next/link";

const priceDelivery = 400;

export default function Page() {
  const { control, handleSubmit } = useForm();
  const router = useRouter();
  const store = useSelector((store) => store.basket);

  const totalPrice = store.items.reduce((prev, next) => {
    if (next.count) {
      const price = next.count * next.flower.price;
      return prev + price;
    }
    return prev;
  }, 0);

  const onSubmit = () => router.push("/acceptDelivery");

  if (store.items.length === 0)
    return (
      <div className="w-full flex items-center flex-col">
        <span className="text-[36px]">У Вас пустая корзина!</span>
        <div className="text-[26px]">
          Для продолжения оформления заказа выберите цветы в{" "}
          <Link href="/catalog" className="underline">
            каталоге
          </Link>
        </div>
      </div>
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <div className="flex flex-col gap-[35px] mb-[24px]">
          <span className="text-5xl text-[#A74D5B]">Оформление заказа</span>
          {store.items.length === 0 && (
            <>
              <span className="text-[36px]">У Вас пустая корзина!</span>
              <div className="text-[36px]">
                Для продолжения оформления заказа выберите цветы в каталоге
              </div>
            </>
          )}
          <span className="text-3xl text-[#A74D5B]">Детали заказа</span>
        </div>
        <div className="flex w-[652px] flex-col gap-[35px] mb-[24px]">
          <Controller
            rules={{ required: "Поле обязательно к заполнению" }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <MyInput
                label="Имя получателя"
                value={value}
                onChange={onChange}
                errorMessage={error?.message}
                labelPlacement="outside"
                placeholder="Имя"
              />
            )}
            control={control}
            name="name"
          />
          <Controller
            rules={{ required: "Поле обязательно к заполнению" }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <MyInput
                label="Номер телефона получателя"
                labelPlacement="outside"
                placeholder="Номер телефона получателя"
                value={value}
                onChange={onChange}
                errorMessage={error?.message}
              />
            )}
            control={control}
            name="phone"
          />
          <Controller
            rules={{ required: "Поле обязательно к заполнению" }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <MyInput
                label="Адрес доставки"
                labelPlacement="outside"
                placeholder="Имя"
                value={value}
                onChange={onChange}
                errorMessage={error?.message}
              />
            )}
            control={control}
            name="address"
          />
          <Controller
            rules={{ required: "Поле обязательно к заполнению" }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <MyInput
                label="Ваш номер телефона"
                labelPlacement="outside"
                placeholder="Ваш номер телефона"
                value={value}
                onChange={onChange}
                errorMessage={error?.message}
              />
            )}
            control={control}
            name="memberPhone"
          />
          <Controller
            rules={{ required: "Поле обязательно к заполнению" }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <MyInput
                label="Имя получателя"
                labelPlacement="outside"
                placeholder="Имя получателя"
                value={value}
                onChange={onChange}
                errorMessage={error?.message}
              />
            )}
            control={control}
            name="nameZakaz"
          />
          <Controller
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <MyInput
                label="Пожелания к заказу"
                labelPlacement="outside"
                placeholder="Пожелания к заказу"
                value={value}
                onChange={onChange}
              />
            )}
            control={control}
            name="additional"
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
            <Tooltip
              showArrow
              content={
                <div className="max-w-[200px] bg-[#FFF4F7] rounded-2xl p-[8px]">
                  <span className="text-[18px]">
                    {store.items.map((item) => item.flower.name).join(", ")}
                  </span>
                </div>
              }
            >
              <span className="text-[#983027] text-[20px] text-ellipsis max-w-[350px] overflow-hidden whitespace-nowrap cursor-pointer">
                {store.items.map((item) => item.flower.name).join(", ")}
              </span>
            </Tooltip>

            <span className="text-[#983027] text-2xl text-end">
              {totalPrice}
            </span>
            <span className="text-[#983027] text-2xl text-end">400</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="text-[#983027] text-2xl">Итого к оплате</span>
          <span className="text-[#983027] text-2xl">
            {totalPrice + priceDelivery}
          </span>
        </div>
        <Button
          className="bg-[#61000F] text-white text-xl mt-[24px]"
          type="submit"
        >
          Оформить заказ
        </Button>
        <span className="w-[650px] text-[#983027]">
          *Оплата переводом или при получении заказа Ваша персональная
          информация будет использована при заказе, подробнее можно ознакомиться
          в разделе политика конфиденциальности.
        </span>
      </div>
    </form>
  );
}
