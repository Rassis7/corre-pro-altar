import { NextPage } from "next";
import NextHead from "next/head";
import { useRouter } from "next/router";
import { AppLayout, Flex } from "@/shared";
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
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          css={{
            padding: "$s",
          }}
        >
          <Head />
          <Form slug={slug as string} />
        </Flex>
      </AppLayout>
    </>
  );
};

export default TankYou;
