import { useContext, useMemo, VFC } from "react";
import Image from "next/image";
import { StoreContext, GiftType } from "@/store";
import { utils } from "@/shared";

export const Card: VFC<GiftType> = (gift) => {
  const { selectGift } = useContext(StoreContext);

  const priceFormatted = useMemo(
    () => utils.getPriceInBrl(gift.price),
    [gift.price]
  );

  const handleSelectGift = (gift: GiftType) => selectGift(gift);

  return (
    <div
      className="text-gray-600 body-font rounded-lg shadow-lg border-gray-200 border cursor-pointer hover:shadow-xl dark:border-gray-700 dark:shadow-dark dark:hover:shadow-darkHover"
      onClick={() => handleSelectGift(gift)}
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="block h-48 w-full rounded-t-lg rounded-b-sm overflow-hidden cursor-pointer">
              <Image
                className="block"
                src={gift.image}
                alt={gift.name}
                loading="lazy"
                layout="intrinsic"
                objectFit="cover"
                width={300}
                height={300}
              />
            </div>
            <div className="mt-4 px-4 py-1">
              <h3 className="text-gray-500 text-xs  title-font mb-1">
                Alemanha
              </h3>
              <h2 className=" title-font text-lg font-medium dark:text-white">
                {gift.name}
              </h2>
              <p className="mt-1">{priceFormatted}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
