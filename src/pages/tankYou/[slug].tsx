import { NextPage } from "next";
import NextHead from "next/head";
import { useRouter } from "next/router";
import { AppLayout, context, Flex, Text } from "@/shared";
import { Form, Head } from "@/tankYou";

const TankYou: NextPage = () => {
  const { query } = useRouter();
  const { slug } = query;

  if (!slug) {
    // TODO: Melhorar isso e colocar o slug como opcional
    return (
      <AppLayout>
        <Flex justifyContent="center" alignItems="center">
          <Text as="h1" fontSize="large">
            Carregando...
          </Text>
        </Flex>
      </AppLayout>
    );
  }

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
