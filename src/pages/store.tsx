import { GetStaticProps, NextPage } from "next";
import {
  PaymentModal,
  GiftType,
  StoreProvider,
  Head,
  Models,
  Gifts,
  Nav,
} from "@/store";
import { AppLayout, Button, services, stitches } from "@/shared";
import NextHead from "next/head";
import { useRouter } from "next/router";

type StoreType = {
  gifts: GiftType;
};

const ButtonContainer = stitches.styled("div", {
  padding: "1rem",
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
          <Nav />
          <Head />
          <Gifts gifts={gifts} />
          <PaymentModal />
        </StoreProvider>

        <ButtonContainer>
          <Button block onClick={() => router.push("/")}>
            Página inicial
          </Button>
        </ButtonContainer>
      </AppLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const gift = new Models.Gift(services.api);
  const gifts = await gift.getAll();

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
    revalidate: 60 * 60 * 2, // 2 hours,
  };
};

export default Store;
