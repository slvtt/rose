import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import mainImage from "@/assets/images/main.png";

interface MainInfoProps {}

const MainInfo: React.FC<MainInfoProps> = () => {
  return (
    <div className="bg-[#FFD3DA] pt-[61px] pb-[137px]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-6xl text-[#A74D5B]">
            Доставка цветов <br />в Ульяновске
          </h1>
          <p className="max-w-[534px] mt-[30px] text-[#A74D5B]">
            Любовь повсюду. Она многогранна и необычна. Она окутывает,
            вдохновляет и позволяет расцветать. И мы считаем, что незачем искать
            какие-то смыслы, закономерности и причины. Любовь просто есть. А
            показать её можно с помощью наших букетов.
          </p>
          <Button
            variant="bordered"
            className="mt-[46px] max-w-[280px] h-[66px] text-[#A74D5B] text-2xl border-[#890909] rounded-none"
          >
            Заказать
          </Button>
        </div>
        <div className="relative w-[443px] h-[506px]">
          <div className="absolute w-[443px] h-[506px] bottom-[20px] right-[20px] border-[#A74D5B] border-1"></div>
          <div className="absolute w-[443px] h-[506px] top-[20px] left-[20px] border-[#A74D5B] border-1"></div>
          <Image fill src={mainImage.src} alt="main" />
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
