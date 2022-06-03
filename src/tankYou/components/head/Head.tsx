import { animations, LottieAnimation, Text } from "@/shared";
import React from "react";
import { Container } from "./styles";

export const Head = () => {
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
        height="11rem"
        loop={true}
      />

      <section>
        <Text as="h1" fontSize="medium" color="secondaryDark">
          Obrigado
        </Text>
        <Text as="h2" fontSize="regular" color="gray">
          Deixe um bilhete de carinho, iremos guardar-lo em um potinho de amor
        </Text>
        <LottieAnimation
          lotti={animations.loveSpellBottle}
          width="7rem"
          height="9rem"
          loop={true}
        />
      </section>
    </Container>
  );
};
