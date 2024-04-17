import React from "react";
import HeartIcon from "@/assets/icons/HeartIcon";
import CardIcon from "@/assets/icons/CardIcon";

interface HeaderProps {}
const tabs = ["Каталог", "Доставка", "О нас"];
const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="w-full bg-[#61000F] text-[#FFD3DA] py-5 sticky top-0 z-20">
      <div className="container mx-auto flex justify-between">
        <div className="flex gap-[134px]">
          <span className="text-2xl">Rose 73</span>
          <div className="flex gap-[34px]">
            {tabs.map((tab) => (
              <span key={tab} className="text-2xl">
                {tab}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-[37px] items-center">
          <HeartIcon />
          <CardIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
