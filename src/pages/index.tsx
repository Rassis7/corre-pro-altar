import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import {services,context} from "@/shared";
import { Header, Content } from "@/home/components";

type HomeProps = {
  photos: Record<number, string>[];
};

const Home: NextPage<HomeProps> = ({ photos }) => {
  if (!photos) return null;

  return (
    <context.ToastProvider>
        <Head>
          <title>Casório - Romulo e Júlia</title>
        </Head>
        <Header />
        <Content photos={photos}/>

    </context.ToastProvider>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: photos } = await services.api.get<Record<number, string>[]>("/photos");
  return {
    props: { photos },
    revalidate: 60,
  };
};

export default Home;
