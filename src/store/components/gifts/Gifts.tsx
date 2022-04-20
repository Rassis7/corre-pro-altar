import { GiftType } from "@/store";
import { VFC } from "react";
import { GiftItem } from "./GiftItem";
import { GiftsWrapper, Grid } from "./styles";
import { Text } from "@/shared";

type Props = {
  gifts: GiftType[];
};

export const Gifts: VFC<Props> = ({ gifts }) => {
  return (
    <>
      <GiftsWrapper>
        <Text as="p" fontSize="large" color="primaryLight">
          Munique
        </Text>
        <Grid>
          {gifts.map((gift) => (
            <GiftItem key={gift.name} gift={gift} />
          ))}
        </Grid>
      </GiftsWrapper>
    </>
  );
};
