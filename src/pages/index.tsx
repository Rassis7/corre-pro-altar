import Head from "next/head";
import { context } from "@/shared";
import { Content } from "@/home";

const Home = () => {
  return (
    <context.ToastProvider>
      <Head>
        <title>Casório - Romulo e Júlia</title>
      </Head>
      <Content />
    </context.ToastProvider>
  );
};

export default Home;
