import Head from "next/head";
import { Content } from "@/home";
import fs from "fs";
import path from "path";
import { VFC } from "react";

type HomeProps = {
  photos: string[];
};

const Home: VFC<HomeProps> = ({ photos }) => {
  console.log(photos);

  return (
    <>
      <Head>
        <title>Casório - Romulo e Júlia</title>
      </Head>
      <Content photos={photos} />
    </>
  );
};

export async function getStaticProps() {
  const directoryPath = path.join(process.cwd(), "public");

  const files = fs.readdirSync(directoryPath);
  const photos = files.filter((file) => file.match(/\.(jpeg)$/));

  return { props: { photos } };
}

export default Home;
