import { Text, Flex } from "@/shared";
import { StoreContext } from "@/store/context";
import { Gift } from "@/store/types";
import { useContext, useMemo, VFC } from "react";
import { Figure, Image, Value } from "./styles";

type Props = {
  gift: Gift;
};

export const GiftItem: VFC<Props> = ({ gift }) => {
  const { selectGift } = useContext(StoreContext);

  const handleSelectGift = (gift: Gift) => selectGift(gift);

  const isSoldOff = useMemo(
    () => gift.priceWithTax === "Esgotado",
    [gift.priceWithTax]
  );

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      {...(!isSoldOff && { onClick: () => handleSelectGift(gift) })}
    >
      <Figure>
        <Image
          src={gift.image}
          alt={gift.name}
          {...(isSoldOff && {
            css: {
              filter: "grayscale(100%)",
            },
          })}
        />
        <figcaption>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="p" color="white" fontSize="regular">
              {gift.name}
            </Text>
            <Value
              css={{
                color: isSoldOff ? "$red500" : "$green200",
              }}
            >
              {gift.priceWithTax}
            </Value>
          </Flex>
        </figcaption>
      </Figure>
    </Flex>
  );
};
