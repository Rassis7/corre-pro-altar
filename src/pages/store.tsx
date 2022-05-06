import { GetStaticProps, NextPage } from "next";
import {
  PaymentModal,
  GiftType,
  StoreProvider,
  Carousel,
  Models,
  Gifts,
} from "@/store";
import { AppLayout, services } from "@/shared";
import Head from "next/head";

type StoreType = {
  gifts: GiftType[];
};

const Store: NextPage<StoreType> = ({ gifts }) => {
  return (
    <>
      <Head>
        <title>{"Lojinha ❤️ | Romuo & Julia"}</title>
      </Head>
      <AppLayout>
        <StoreProvider>
          <Carousel />
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
  return {
    props: { gifts },
    revalidate: 60,
  };
};

export default Store;
