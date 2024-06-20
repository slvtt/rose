import React from "react";
import Link from "next/link";

interface EmptyProps {}

const Empty: React.FC<EmptyProps> = () => {
  return (
    <div className="w-full min-h-[400px] flex flex-col justify-center">
      <h3 className=" text-[#A74D5B] text-center text-5xl">
        Ваша корзина пуста
      </h3>
      <Link
        href="/catalog"
        className="text-[#130101] text-center w-full text-xl block"
      >
        Нажмите здесь, чтобы продолжить покупки
      </Link>
    </div>
  );
};

export default Empty;
