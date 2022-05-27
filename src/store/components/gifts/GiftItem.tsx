import { Text, Flex } from "@/shared";
import { StoreContext } from "@/store/context";
import { Gift } from "@/store/types";
import { useContext, VFC } from "react";
import { Figure, Image, Value } from "./styles";

type Props = {
  gift: Gift;
};

export const GiftItem: VFC<Props> = ({ gift }) => {
  const { selectGift } = useContext(StoreContext);

  const handleSelectGift = (gift: Gift) => selectGift(gift);

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
            <Value>{gift.price}</Value>
          </Flex>
        </figcaption>
      </Figure>
    </Flex>
  );
};
