import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { services, context } from "@/shared";
import { Content, Photos } from "@/home";

type HomeProps = {
  photos: string[];
};

const Home: NextPage<HomeProps> = ({ photos }) => {
  if (!photos) return null;

  return (
    <context.ToastProvider>
      <Head>
        <title>Casório - Romulo e Júlia</title>
      </Head>
      <Content photos={photos} />
    </context.ToastProvider>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const gifts = new Photos(services.api);

  const photos = await gifts.getAll();
  return {
    props: { photos },
    revalidate: 60,
  };
};

export default Home;
