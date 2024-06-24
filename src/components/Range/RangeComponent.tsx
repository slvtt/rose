import React from "react";
import Image from "next/image";
import booksImage from "@/assets/images/books.png";
import toysImage from "@/assets/images/toys.png";
import roseImage from "@/assets/images/rose.png";
import rose2Image from "@/assets/images/rose2.png";
import hrisImage from "@/assets/images/hris.png";
import pions from "@/assets/images/pions.png";
import tulp from "@/assets/images/tulp.png";
import lili from "@/assets/images/lili.png";
import hris2Image from "@/assets/images/hris2.png";
import altstro from "@/assets/images/altstro.png";
import gortenImage from "@/assets/images/gorten.png";
import romImage from "@/assets/images/rom.png";
import Link from "next/link";

interface RangeProps {}
const data = [
  { title: "РОЗЫ", image: roseImage, id: "rose", href: "/catalog#rose" },
  {
    title: "КУСТОВЫЕ РОЗЫ",
    image: rose2Image,
    id: "kustRose",
    href: "/catalog#kustRose",
  },
  {
    title: "ОДНОГОЛОВЫЕ ХРИЗАНТЕМЫ",
    image: hrisImage,
    id: "odinHris",
    href: "/catalog#odinHris",
  },
  {
    title: "КУСТОВЫЕ ХРИЗАНТЕМЫ",
    image: hris2Image,
    id: "odinHris",
    href: "/catalog#odinHris",
  },
  {
    title: "ГОРТЕНЗИИ",
    image: gortenImage,
    id: "gorten",
    href: "/catalog#gorten",
  },
  { title: "ПИОНЫ", image: pions },
  { title: "ГИПСОФИЛЫ", image: tulp, id: "pions", href: "/catalog#gips" },
  { title: "ЛИЛИИ", image: lili, id: "lili", href: "/catalog#lili" },
  {
    title: "ГЕРБЕРЫ",
    image: romImage,
    id: "gerber",
    href: "/catalog#gerber",
  },
  { title: "ДИАНТУСЫ", image: altstro, href: "/catalog#diantus" },
  { title: "ИГРУШКИ", image: toysImage },
  { title: "ОТКРЫТКИ", image: booksImage },
];

const RangeComponent: React.FC<RangeProps> = () => {
  return (
    <div className="mt-[79px]">
      <div className="container mx-auto">
        <h2 className="text-5xl text-[#A74D5B]">Наш ассортимент</h2>
        <div className="flex justify-between mt-[40px]">
          {data.map((item, index) => (
            <React.Fragment key={item.title}>
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <div className="h-[80px] overflow-hidden">
                    <Image
                      src={item.image.src}
                      alt={item.title}
                      width={57}
                      height={80}
                    />
                  </div>
                </div>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="break-words w-[106px] text-xs inline-block mt-[20px] text-center text-[#A74D5B]"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <span className="break-words w-[106px] text-xs inline-block mt-[20px] text-center text-[#A74D5B]">
                    {item.title}
                  </span>
                )}
              </div>
              {index !== data.length - 1 && (
                <div
                  className={`text-[#A74D5B] h-[69px] w-[10px] border-l-[#A74D5B] border-l `}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RangeComponent;
