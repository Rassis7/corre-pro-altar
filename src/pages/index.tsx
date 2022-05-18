import Head from "next/head";
import { context } from "@/shared";
import { Content } from "@/home";
import fs from "fs";
import path from "path";
import { VFC } from "react";

type HomeProps = {
  photos: string[];
};

const Home: VFC<HomeProps> = ({ photos }) => (
  <context.ToastProvider>
    <Head>
      <title>Casório - Romulo e Júlia</title>
    </Head>
    <Content photos={photos} />
  </context.ToastProvider>
);

export async function getStaticProps() {
  const directoryPath = path.join(process.cwd(), "public");

  const files = fs.readdirSync(directoryPath);
  const photos = files.filter((file) => file.match(/\.(jpeg)$/));

  return { props: { photos } };
}

export default Home;
