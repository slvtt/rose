import React from "react";
import VkIcon from "@/assets/icons/VkIcon";
import SupIcon from "@/assets/icons/SupIcon";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="bg-[#61000F] ">
      <div className="container mx-auto py-[69px] flex justify-between">
        <div className="flex flex-col gap-[31px]">
          <span>ROSE 73</span>
          <span className="max-w-[365px]">
            © 2019 Rose73.ru — Продажа цветочной продукции в городе Ульяновск
          </span>
          <span>
            Находимся по адресу
            <br /> 2 пер.Мира 11
          </span>
          <span>
            Часы работы с 08-00 до 20-00 <br /> (Без перерывов и выходных)
          </span>
        </div>
        <div className="flex flex-col gap-[31px]">
          <span>Контакты</span>
          <span>+7(905)349-11-88 WhatsApp</span>
          <span>
            ИП Ивойлов Э.М.
            <br />
            Юр.Адрес: ВАСЕНКО 15 (офис 302),
            <br /> САРАНСК Г., МОРДОВИЯ РЕСП.
            <br />
            ОГРНИП 322132600000479
            <br />
            ИНН 132813561600
          </span>
        </div>
        <div className="flex flex-col gap-[31px]">
          <span>Наши соц.сети</span>
          <span className="flex gap-[16px] mb-[7px]">
            <VkIcon />
            <SupIcon />
          </span>
          <span>НАВИГАЦИЯ ПО САЙТУ</span>
          <div className="flex flex-col gap-[16px]">
            <span>О магазине </span> <span>Пользовательское соглашение</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
