import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { services, context } from "@/shared";
import { Content } from "@/home/components";

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
  const { data: photos } = await services.api.get<Record<number, string>[]>(
    "/photos"
  );

  const photosArray = Object.values(photos).map((url) => url[0]);

  return {
    props: { photos: photosArray },
    revalidate: 60,
  };
};

export default Home;
