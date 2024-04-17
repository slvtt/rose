import React from "react";
import Image from "next/image";
import StarIcon from "@/assets/icons/StarIcon";

interface ReviewsProps {}

const reviewsItems = [
  {
    grade: 5,
    memberImage:
      "https://i.pinimg.com/736x/08/31/32/0831322d10a17dafeaecc800e78dcac5.jpg",
    name: "Анастасия Вотрина 5",
    message:
      "Отличный магазин,хорошие цены и приятный персонал,заказывала букетик через сайт,очень удобно и быстро оформила заказ. Спасибо, что всегда во всем радуете!",
  },
  {
    grade: 5,
    memberImage:
      "https://i.pinimg.com/736x/08/31/32/0831322d10a17dafeaecc800e78dcac5.jpg",
    name: "Анастасия Вотрина 3",
    message:
      "Отличный магазин,хорошие цены и приятный персонал,заказывала букетик через сайт,очень удобно и быстро оформила заказ. Спасибо, что всегда во всем радуете!",
  },
  {
    grade: 5,
    memberImage:
      "https://i.pinimg.com/736x/08/31/32/0831322d10a17dafeaecc800e78dcac5.jpg",
    name: "Анастасия Вотрина 2",
    message:
      "Отличный магазин,хорошие цены и приятный персонал,заказывала букетик через сайт,очень удобно и быстро оформила заказ. Спасибо, что всегда во всем радуете!",
  },
  {
    grade: 5,
    memberImage:
      "https://i.pinimg.com/736x/08/31/32/0831322d10a17dafeaecc800e78dcac5.jpg",
    name: "Анастасия Вотрина 1",
    message:
      "Отличный магазин,хорошие цены и приятный персонал,заказывала букетик через сайт,очень удобно и быстро оформила заказ. Спасибо, что всегда во всем радуете!",
  },
  {
    grade: 5,
    memberImage:
      "https://i.pinimg.com/736x/08/31/32/0831322d10a17dafeaecc800e78dcac5.jpg",
    name: "Анастасия Вотрина 6",
    message:
      "Отличный магазин,хорошие цены и приятный персонал,заказывала букетик через сайт,очень удобно и быстро оформила заказ. Спасибо, что всегда во всем радуете!",
  },
  {
    grade: 5,
    memberImage:
      "https://i.pinimg.com/736x/08/31/32/0831322d10a17dafeaecc800e78dcac5.jpg",
    name: "Анастасия Вотрина 7",
    message:
      "Отличный магазин,хорошие цены и приятный персонал,заказывала букетик через сайт,очень удобно и быстро оформила заказ. Спасибо, что всегда во всем радуете!",
  },
];

const Reviews: React.FC<ReviewsProps> = () => {
  return (
    <div className="container mx-auto text-[#A74D5B] mt-[80px]">
      <h3 className="text-6xl mb-[60px] text-[#A74D5B]">Отзывы</h3>
      <div className="grid grid-cols-3 gap-[36px]">
        {reviewsItems.map((review, index) => (
          <div
            className="flex items-center gap-[24px]"
            key={review.name + index}
          >
            <div className="border-[#891409] border-2 rounded-2xl">
              <Image
                src={review.memberImage}
                alt={review.name}
                width={125}
                className="rounded-2xl max-h-[102px]"
                height={102}
              />
            </div>
            <div className="flex flex-col gap-[3px]">
              <span className="flex items-center gap-[2px]">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </span>
              <span>{review.name}</span>
              <span className="max-w-[221px] text-xs">{review.message}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
