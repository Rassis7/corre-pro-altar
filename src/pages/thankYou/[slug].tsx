import { NextPage } from "next";
import NextHead from "next/head";
import { useRouter } from "next/router";
import { AppLayout, context } from "@/shared";
import { Form, Head } from "@/thankYou";

const TankYou: NextPage = () => {
  const { query } = useRouter();
  const { slug } = query;

  return (
    <context.ToastProvider>
      <NextHead>
        <title>{"Obrigado ❤️ | Romulo & Julia"}</title>
      </NextHead>
      <AppLayout>
        <Head />
        <Form slug={slug as string} />
      </AppLayout>
    </context.ToastProvider>
  );
};

export default TankYou;
