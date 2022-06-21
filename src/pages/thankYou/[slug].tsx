import { NextPage } from "next";
import NextHead from "next/head";
import { useRouter } from "next/router";
import { AppLayout } from "@/shared";
import { Form, Head } from "@/thankYou";

const TankYou: NextPage = () => {
  const { query } = useRouter();
  const { slug } = query;

  return (
    <>
      <NextHead>
        <title>{"Obrigado ❤️ | Romulo & Julia"}</title>
      </NextHead>
      <AppLayout>
        <Head />
        <Form slug={slug as string} />
      </AppLayout>
    </>
  );
};

export default TankYou;
