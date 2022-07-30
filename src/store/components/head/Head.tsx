import { useMemo } from "react";
import { Arrow, Text, Flex } from "@/shared";
import { useMediaQuery } from "@/shared/hooks";
import { TextContainer } from "./styles";

export const Head = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const image = useMemo(
    () =>
      isDesktop
        ? "FFC6767F-99D2-4FB5-8253-737DA61A4660"
        : "81FE8AD0-9632-4A02-BF71-AE33A4ACD9E9",
    [isDesktop]
  );

  return (
    <Flex
      justifyContent="space-evenly"
      alignItems="center"
      flexDirection="column"
      css={{
        height: "80vh",
        backgroundImage: `url("/${image}.jpeg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        marginBottom: "1rem",
        "&:after": {
          content: "",
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.8)",
          zIndex: 1,
        },
      }}
    >
      <TextContainer>
        <Text
          as="h1"
          fontSize={isDesktop ? "extraLarge" : "medium"}
          color="orange"
          css={{ mx: "2rem" }}
        >
          Nossa Lua de Mel
        </Text>

        <Text
          as="p"
          color="gray"
          fontSize={isDesktop ? "medium" : "regular"}
          css={{ mx: "1rem" }}
        >
          Escolhemos para a Lua de Mel três destinos que são a nossa cara.
        </Text>
        <Text
          as="p"
          color="gray"
          fontSize={isDesktop ? "medium" : "regular"}
          css={{ mx: "1rem" }}
        >
          Vamos conhecer a maior festa de cerveja do mundo: a Oktoberfest em
          Munique, Alemanha.
        </Text>
        <Text
          as="p"
          color="gray"
          fontSize={isDesktop ? "medium" : "regular"}
          css={{ mx: "1rem" }}
        >
          Depois partiremos para Roma em um passeio de muita história e, claro,
          muita gastronomia!
        </Text>
        <Text
          as="p"
          color="gray"
          fontSize={isDesktop ? "medium" : "regular"}
          css={{ mx: "1rem" }}
        >
          Por último, iremos para a charmosa cidade de Amsterdã, conhecer a sede
          da cervejaria Heineken e passear pelos canais Holandeses!
        </Text>
        <br />
        <Text
          as="p"
          color="gray"
          fontSize={isDesktop ? "medium" : "regular"}
          css={{ mx: "1rem" }}
        >
          Selecionamos uma lista de presentes que farão a nossa Lua de Mel ainda
          mais inesquecível!
        </Text>
      </TextContainer>

      <Arrow />
    </Flex>
  );
};
