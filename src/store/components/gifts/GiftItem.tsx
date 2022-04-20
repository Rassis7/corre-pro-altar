import { utils } from "@/shared";
import { Flex } from "@/shared/components/Flex";
import { StoreContext } from "@/store/context";
import { GiftType } from "@/store/types";
import { useContext, useMemo, VFC } from "react";
import { Figure, Image, TextSmall, Value } from "./styles";

type Props = {
  gift: GiftType;
};

export const GiftItem: VFC<Props> = ({ gift }) => {
  const { selectGift } = useContext(StoreContext);

  const priceFormatted = useMemo(
    () => utils.getPriceInBrl(gift.price),
    [gift.price]
  );

  const handleSelectGift = (gift: GiftType) => selectGift(gift);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      onClick={() => handleSelectGift(gift)}
    >
      <Figure>
        <Image src={gift.image} alt={gift.name} />
        <figcaption>
          <p>
            <TextSmall>{gift.name} - </TextSmall>
            <Value>{priceFormatted}</Value>
          </p>
        </figcaption>
      </Figure>
    </Flex>
  );
};
