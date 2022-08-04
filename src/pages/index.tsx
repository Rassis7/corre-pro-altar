import Head from "next/head";
import fs from "fs";
import path from "path";
import { Content } from "@/home";
import { VFC } from "react";
import { getGenerateRandomValue } from "@/shared/utils";

type HomeProps = {
  photo: string;
};

const Home: VFC<HomeProps> = ({ photo }) => {
  return (
    <>
      <Head>
        <title>Casório - Romulo e Júlia</title>
      </Head>
      <Content background={photo} />
    </>
  );
};

export async function getStaticProps() {
  const directoryPath = path.join(process.cwd(), "public/mosaic");

  const files = fs.readdirSync(directoryPath);
  const photos = files.filter((file) => file.match(/\d.(webp)$/));
  const randomIndex = getGenerateRandomValue(1, 3);

  return { props: { photo: photos[randomIndex] } };
}

export default Home;
