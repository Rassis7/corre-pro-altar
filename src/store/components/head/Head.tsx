import { useMemo } from "react";
import { Arrow, Text, Flex, LottieAnimation, animations } from "@/shared";
import { useMediaQuery } from "@/shared/hooks";
import { TextContainer } from "./styles";

export const Head = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const isBp1 = useMediaQuery("(max-width: 425px)");

  const image = useMemo(
    () =>
      isDesktop
        ? "47700055-82AD-4026-B8C3-9D9FA738F222_1_105_c"
        : "E0DD59AB-5F75-48E5-92ED-636BE7D4EDD4_1_105_c",
    [isDesktop]
  );

  const { titleSize, textSize } = useMemo(() => {
    const titleSize = isDesktop ? "extraLarge" : "medium";
    const textSize = isDesktop ? "medium" : "regular";
    return { titleSize, textSize } as const;
  }, [isDesktop]);

  return (
    <Flex
      justifyContent="space-evenly"
      alignItems="center"
      flexDirection="column"
      css={{
        height: "85vh",
        backgroundImage: `url("/${image}.webp")`,
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
        <LottieAnimation
          lotti={animations.rings}
          width={isBp1 ? "6rem" : "8rem"}
          height="auto"
          loop={false}
        />

        <Text as="h1" fontSize={titleSize} color="orange" css={{ mx: "2rem" }}>
          Nossa Lua de Mel
        </Text>

        <Text as="p" color="gray" fontSize={textSize} css={{ mx: "1rem" }}>
          Escolhemos para a Lua de Mel três destinos que são a nossa cara.
        </Text>
        <Text as="p" color="gray" fontSize={textSize} css={{ mx: "1rem" }}>
          Vamos conhecer a maior festa de cerveja do mundo: a Oktoberfest em
          Munique, Alemanha.
        </Text>
        <Text as="p" color="gray" fontSize={textSize} css={{ mx: "1rem" }}>
          Depois partiremos para Roma em um passeio de muita história e, claro,
          muita gastronomia!
        </Text>
        <Text as="p" color="gray" fontSize={textSize} css={{ mx: "1rem" }}>
          Por último, iremos para a charmosa cidade de Amsterdã, conhecer a sede
          da cervejaria Heineken e passear pelos canais Holandeses!
        </Text>
        <br />
        <Text as="p" color="gray" fontSize={textSize} css={{ mx: "1rem" }}>
          Selecionamos uma lista de presentes que farão a nossa Lua de Mel ainda
          mais inesquecível!
        </Text>
      </TextContainer>

      <Arrow />
    </Flex>
  );
};
