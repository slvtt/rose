"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface AcceptDeliveryProps {}

const AcceptDelivery: React.FC<AcceptDeliveryProps> = () => {
  const router = useRouter();
  return (
    <div className="w-[100%] relative">
      <div className="flex flex-col gap-[24px] text-center   h-[430px] rounded-2xl p-[16px]">
        <span className="text-[48px]">Спасибо, что выбрали нас!</span>
        <span className="text-[48px]">
          Наш менеджер свяжется с Вами для подтверждения заказа.
        </span>
        <Button
          className="bg-[#61000F] text-white text-[24px] mt-[24px] h-[50px] w-[500px] self-center"
          onClick={() => router.replace("/catalog")}
        >
          Назад в каталог
        </Button>
      </div>
    </div>
  );
};

export default AcceptDelivery;
