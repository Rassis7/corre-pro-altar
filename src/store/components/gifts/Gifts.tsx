import { Fragment, VFC } from "react";
import { GiftType } from "@/store";
import { GiftItem } from "./GiftItem";
import { GiftsWrapper, Grid } from "./styles";
import { Text } from "@/shared";

type Props = {
  gifts: GiftType;
};

export const Gifts: VFC<Props> = ({ gifts }) => {
  console.log("gifts", gifts);

  return (
    <>
      <GiftsWrapper>
        {Object.entries(gifts).map(([name, giftPerCity]) => (
          <Fragment key={name}>
            <Text as="p" fontSize="large" color="gray">
              {name}
            </Text>
            <Grid>
              {giftPerCity.map((gift) => (
                <GiftItem key={gift.name} gift={gift} />
              ))}
            </Grid>
          </Fragment>
        ))}
      </GiftsWrapper>
    </>
  );
};
