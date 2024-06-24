import React from "react";
import HeartIcon from "@/assets/icons/HeartIcon";
import CardIcon from "@/assets/icons/CardIcon";
import Link from "next/link";

interface HeaderProps {}
const tabs = [
  { title: "Каталог", href: "/catalog" },
  { title: "Доставка", href: "/delivery" },
  { title: "О нас", href: "/about" },
];
const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="w-full bg-[#61000F] text-[#FFD3DA] py-5 sticky top-0 z-20">
      <div className="container mx-auto flex justify-between">
        <div className="flex gap-[134px]">
          <Link href="/" className="text-2xl">
            Rose 73
          </Link>
          <div className="flex gap-[34px]">
            {tabs.map((tab) => (
              <Link href={tab.href} key={tab.title} className="text-2xl">
                {tab.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-[37px] items-center">
          <Link href="/basket">
            <CardIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
