import { animations, Arrow, LottieAnimation, Text } from "@/shared";
import { Container, TextContainer } from "./styles";

export const Head = () => (
  <Container
    justifyContent="space-evenly"
    alignItems="center"
    flexDirection="column"
  >
    <LottieAnimation
      lotti={animations.planetTravel}
      width="60%"
      height="auto"
      loop={true}
    />

    <TextContainer>
      <Text as="h1" fontSize="medium" color="gray" css={{ fontSize: "1.8rem" }}>
        Presente bom, é aquele que sempre é lembrado...
      </Text>

      <Text as="h2" color="gray" css={{ fontSize: "1rem" }}>
        e com a gente não é diferente. Que tal nos ajudar a lembrar para sempre
      </Text>
    </TextContainer>

    <Arrow />
  </Container>
);
