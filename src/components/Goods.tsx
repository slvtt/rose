import React from "react";
import GoodItem from "@/components/GoodItem/GoodItem";

interface GoodsProps {
  items: Array<{
    image: string;
    title: string;
    id: number;
    subtitle: string;
    price: number;
  }>;
  blockTitle: string;
  linkId?: string;
}

export const hits = [
  {
    title: "Проблески утреннего восхода",
    id: 1,
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 2100,
    image:
      "https://sun9-64.userapi.com/impg/xYD_Ezq9_DF1VIpSzApKffENNFhCukCD7ERRNQ/BT-VZ27fAAo.jpg?size=1620x2160&quality=95&sign=c5808637d02c3044fb1e041f9ab95481&type=album",
  },
  {
    title: "Проблески утреннего восхода",
    id: 2,
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 2200,
    image:
      "https://sun9-68.userapi.com/impg/Rg5IRmExRu86bWR8BEpTYaNthIwLwbJBaRwXrg/x2PregpqpLQ.jpg?size=1738x2160&quality=95&sign=2f6fda0d6cf0f0339f7f95b31ae95c40&type=album",
  },
  {
    title: "Проблески утреннего восхода",
    id: 3,
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 1500,
    image:
      "https://sun9-5.userapi.com/impg/ph2i3cXnXsJnfHmOfCETmIkw5c_Sp_TKg7G5qw/lgIT03kcLBc.jpg?size=1620x2160&quality=95&sign=d082745937cde625e9d4d7473e4f2ebc&type=album",
  },
  {
    title: "Проблески утреннего восхода",
    id: 4,
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 1650,
    image:
      "https://sun9-31.userapi.com/impg/Jcfjmso-K655YLPcKtzx5_j3jAV1Btl3R234eg/AZDOP2C9ytk.jpg?size=1888x2160&quality=95&sign=50a45cca9cef6bfe18e8680f3bcec625&type=album",
  },
];

export const news = [
  {
    title: "Проблески утреннего восхода",
    id: 5,
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 1999,
    image:
      "https://sun9-48.userapi.com/impg/40JCrGtZJAQRnXXdBh9-FIJRtsv39A1vd8CYvw/ZpTz5eqYAt8.jpg?size=510x765&quality=95&sign=0de7e0875153997484512ecc186c3ce4&c_uniq_tag=nZic-iY79Yb4TQHKihG66NUc88ijEbVbMzlUKHecXoo&type=album",
  },
  {
    title: "Проблески утреннего восхода",
    id: 6,
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 2100,
    image:
      "https://sun9-22.userapi.com/impg/o2J0WeC4rdrtx5rcKb_vyHmx0wUJ00Zmnz1oSg/yVnTm6abT1U.jpg?size=510x680&quality=95&sign=86c4cee5985e687f5e60b526390940a3&c_uniq_tag=h_eE5Hgb9u4aDGya6YrSoGWyoOePoWnsH5V4iEMiQC0&type=album",
  },
  {
    title: "Проблески утреннего восхода",
    id: 7,
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 2900,
    image:
      "https://sun9-18.userapi.com/impg/U9JvnekiNFsS9rrzRrWRqBKU7jBB4YHqHWZ9GA/R93bpwD2zSw.jpg?size=510x680&quality=95&sign=f77bc1fd1b118e0236d4ef0607659c86&c_uniq_tag=PPBq_JKEWHcLOh4DCNqTXXpRaJCotMcJNrpUdKmg45E&type=album",
  },
  {
    title: "Проблески утреннего восхода",
    id: 8,
    subtitle: "Кустовые розы, хризантемы, розы",
    price: 3099,
    image:
      "https://sun9-40.userapi.com/KmTel2mKZeCvUYOA51sRaDSRskEoWbtxLTwiLA/uMH4Ob7lj5I.jpg",
  },
];

const Goods: React.FC<GoodsProps> = ({ items, blockTitle, linkId }) => {
  return (
    <div className="container mx-auto mt-[80px]" id={linkId}>
      <h3 className="text-6xl mb-[60px] text-[#A74D5B]">{blockTitle}</h3>
      <div className="flex justify-between">
        {items.map((item, index) => (
          <GoodItem item={item} key={item.title + index} />
        ))}
      </div>
    </div>
  );
};

export default Goods;
