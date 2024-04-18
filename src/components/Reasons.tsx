import React from "react";
import FlowerIcon from "@/assets/icons/FlowerIcon";
import CarIcon from "@/assets/icons/CarIcon";
import HeartLargeIcon from "@/assets/icons/HeartLargeIcon";
import MessageIcon from "@/assets/icons/MessageIcon";

interface ReasonsProps {}

const reasonItems = [
  {
    title: (
      <span>
        Качество продукции <br />
        Только свежие цветы по оптовым ценам
      </span>
    ),
    image: <FlowerIcon />,
  },
  {
    title: (
      <span>
        Быстрая доставка <br /> Доставим букет уже через <br /> 60-90 минут
      </span>
    ),
    image: <CarIcon />,
  },
  {
    title: (
      <span>
        Отношение к работе <br /> Уважаем клиентов,
        <br /> работаем с душой
      </span>
    ),
    image: <HeartLargeIcon />,
  },
  {
    title: (
      <span>
        Реальные отзывы <br /> Настоящие отзывы <br /> наших клиентов
      </span>
    ),
    image: <MessageIcon />,
  },
];

const Reasons: React.FC<ReasonsProps> = () => {
  return (
    <div className="container mx-auto mt-[80px]">
      <h3 className="text-6xl mb-[60px] text-[#A74D5B]">Почему выбирают нас</h3>
      <div className="flex justify-between">
        {reasonItems.map((item, index) => (
          <div key={index}>
            <span className="min-h-[92px] flex mb-[16px] justify-center">
              {item.image}
            </span>

            <span className="text-[#A74D5B] text-center flex justify-center">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reasons;
