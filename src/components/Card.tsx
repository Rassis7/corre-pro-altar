import { useMemo, VFC } from "react";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { GiftsTypeRaw } from "../types/gift";
import Image from "next/image";

export const Card: VFC<GiftsTypeRaw> = ({ price, image, name, buyLink }) => {
  const handleGoToLink = (link: string) => window.open(link, "_blank");

  const priceFormatted = useMemo(() => {
    const formatted = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    const priceNumber = Number(price.replace(",", "."));
    return formatted.format(priceNumber);
  }, [price]);

  return (
    <div className="w-full bg-gray-400 text-white rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center dark:bg-gray-900">
      <div className="mb-8">
        <Image
          className="object-center object-cover rounded-full h-9 w-9"
          src={image}
          alt={name}
          loading="lazy"
          width="100%"
          height="100%"
        />
      </div>
      <div className="text-center">
        <p className="text-xl text-white font-bold mb-2">{name}</p>
        <p className="font-medium">{priceFormatted}</p>
        <button
          className="btn bg-blue-400 hover:bg-blue-500 delay-200"
          onClick={() => handleGoToLink(buyLink)}
        >
          <div className="flex items-center gap-1">
            <BsFillEmojiHeartEyesFill />
            Presentear
          </div>
        </button>
      </div>
    </div>
  );
};
