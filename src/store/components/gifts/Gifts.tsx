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
        <Text.h2>Munique</Text.h2>
        <Grid>
          {gifts.map((gift) => (
            <GiftItem key={gift.name} gift={gift} />
          ))}
        </Grid>
      </GiftsWrapper>
      <GiftsWrapper>
        <Text.h2>Munique</Text.h2>
        <Grid>
          {gifts.map((gift) => (
            <GiftItem key={gift.name} gift={gift} />
          ))}
        </Grid>
      </GiftsWrapper>
    </>
  );
};
