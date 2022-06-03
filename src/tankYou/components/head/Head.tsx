import { animations, LottieAnimation, Text } from "@/shared";
import React from "react";
import { Container } from "./styles";
import { useMediaQuery } from "@/shared/hooks";

export const Head = () => {
  const isBp2 = useMediaQuery("(min-width: 768px)");

  return (
    <Container
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap="2rem"
    >
      <LottieAnimation
        lotti={animations.loveLetter}
        width="100%"
        height={isBp2 ? "20rem" : "11rem"}
        loop={true}
      />

      <section>
        <Text as="h1" fontSize="medium" color="secondaryDark">
          Obrigado
        </Text>
        <Text as="h2" fontSize="regular" color="gray">
          Deixe um bilhete de carinho
        </Text>
      </section>
    </Container>
  );
};
