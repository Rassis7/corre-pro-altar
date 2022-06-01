import { GetStaticProps, NextPage } from "next";
import {
  PaymentModal,
  GiftType,
  StoreProvider,
  Head,
  Models,
  Gifts,
} from "@/store";
import { AppLayout, services } from "@/shared";
import NextHead from "next/head";

type StoreType = {
  gifts: GiftType;
};

const Store: NextPage<StoreType> = ({ gifts }) => {
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
