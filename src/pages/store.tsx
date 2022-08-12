import { GetStaticProps, NextPage } from "next";
import {
  PaymentModal,
  GiftType,
  StoreProvider,
  Head,
  Models,
  Gifts,
  RawGift,
} from "@/store";
import { AppLayout, Button, services, stitches, Flex } from "@/shared";
import NextHead from "next/head";
import { useRouter } from "next/router";
import db from "../../db.json";

type StoreType = {
  gifts: GiftType;
};

const ButtonContainer = stitches.styled(Flex, {
  paddingBottom: "$xl",
});

const Store: NextPage<StoreType> = ({ gifts }) => {
  const router = useRouter();

  if (!gifts) return null;

  return (
    <>
      <NextHead>
        <title>{"Lojinha ❤️ | Romulo & Julia"}</title>
      </NextHead>
      <AppLayout>
        <StoreProvider>
          <Head />
          <Gifts gifts={gifts} />
          <PaymentModal />
        </StoreProvider>

        <ButtonContainer
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gap="1rem"
        >
          <Button block onClick={() => router.push("/")}>
            Página inicial
          </Button>
          <Button
            block
            color="disabled"
            onClick={() => router.push("/thankYou/RJ000")}
          >
            Deixe uma mensagem!
          </Button>
        </ButtonContainer>
      </AppLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let gifts: RawGift[] = db as RawGift[];

  if (process.env.NODE_ENV !== "development") {
    const gift = new Models.Gift(services.api);
    gifts = await gift.getAll();
  }

  const giftsPerCity = {} as GiftType;
  gifts.forEach(({ city, ...gift }) => {
    if (city in giftsPerCity) {
      giftsPerCity[city].push(gift);
      return;
    }
    Object.assign(giftsPerCity, { [city]: [gift] });
  });

  return {
    props: { gifts: giftsPerCity },
    revalidate: 60 * 60 * 24, // 24 hours,
  };
};

export default Store;
