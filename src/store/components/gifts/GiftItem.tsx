import { Text, Flex } from "@/shared";
import { StoreContext } from "@/store/context";
import { Gift } from "@/store/types";
import { useContext, useMemo, VFC } from "react";
import { Figure, Image, Value } from "./styles";

type Props = {
  gift: Gift;
  hasCloseFriend: boolean;
};

export const GiftItem: VFC<Props> = ({ gift, hasCloseFriend }) => {
  const { selectGift } = useContext(StoreContext);

  const handleSelectGift = (gift: Gift) => selectGift(gift);

  const isSoldOff = useMemo(
    () => gift.priceWithTax === "Esgotado" || gift.priceWithTax === "R$ 0,00",
    [gift.priceWithTax]
  );

  const isImageSoldOff = useMemo(
    () => (isSoldOff ? { filter: "grayscale(100%)" } : {}),
    [isSoldOff]
  );

  if (gift.isSecret === "TRUE" && !hasCloseFriend) {
    return null;
  }

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      {...(!isSoldOff && { onClick: () => handleSelectGift(gift) })}
      css={{ cursor: "pointer" }}
    >
      <Figure
        css={{
          "@bp2": {
            width: "25rem",
          },
          "@bp3": {
            width: "21rem",
          },
          "@bp4": {
            width: "27rem",
          },
          "@bp5": {
            width: "40rem",
          },
        }}
      >
        <Image
          src={gift.image}
          alt={gift.name}
          css={{
            ...isImageSoldOff,
            height: "15rem",
            "@bp2": {
              width: "25rem",
            },
            "@bp3": {
              width: "21rem",
            },
            "@bp4": {
              width: "27rem",
            },
            "@bp5": {
              width: "40rem",
            },
          }}
          loading="lazy"
        />
        <figcaption>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            css={{
              overflow: "hidden",
            }}
          >
            <Text
              as="p"
              color="white"
              css={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                width: "100%",
                overflow: "hidden",
                fontSize: "1.5rem",
              }}
            >
              {gift.name}
            </Text>
            <Value
              css={{
                color: isSoldOff ? "$red500" : "$green200",
              }}
            >
              {isSoldOff ? "Esgotado" : gift.priceWithTax}
            </Value>
          </Flex>
        </figcaption>
      </Figure>
    </Flex>
  );
};
