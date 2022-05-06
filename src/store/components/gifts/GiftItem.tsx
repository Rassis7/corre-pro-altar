import { Text, utils, Flex } from "@/shared";
import { StoreContext } from "@/store/context";
import { GiftType } from "@/store/types";
import { useContext, useMemo, VFC } from "react";
import { Figure, Image, Value } from "./styles";

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
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="p" color="white" fontSize="regular">
              {gift.name}
            </Text>
            <Value>{priceFormatted}</Value>
          </Flex>
        </figcaption>
      </Figure>
    </Flex>
  );
};
