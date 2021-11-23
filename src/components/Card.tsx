import { useContext, useMemo, VFC } from "react";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { GiftType } from "../types/gift";
import Image from "next/image";
import { StoreContext } from "../context/Store";
import { getPriceInBrl } from "../utils/format";

export const Card: VFC<GiftType> = (gift) => {
  const { selectGift } = useContext(StoreContext);

  const priceFormatted = useMemo(() => getPriceInBrl(gift.price), [gift.price]);

  const handleSelectGift = (gift: GiftType) => selectGift(gift);

  return (
    <div className="w-full bg-gray-400 text-white rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center dark:bg-gray-900">
      <div className="mb-8">
        <Image
          className="object-center object-cover rounded-full h-9 w-9"
          src={gift.image}
          alt={gift.name}
          loading="lazy"
          width="100%"
          height="100%"
        />
      </div>
      <div className="text-center">
        <p className="text-xl text-white font-bold mb-2">{gift.name}</p>
        <p className="font-medium">{priceFormatted}</p>
        <button
          className="btn bg-blue-400 hover:bg-blue-500 delay-200"
          onClick={() => handleSelectGift(gift)}
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
