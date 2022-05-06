import { animations, LottieAnimation, Text } from "@/shared";
import { Arrow, Container } from "./styles";

export const Head = () => {
  return (
    <Container>
      <Text as="h1" fontSize="medium" color="white">
        Presente bom, é aquele que sempre é lembrado...
      </Text>
      <LottieAnimation
        lotti={animations.planetTravel}
        width="100%"
        height="auto"
        loop={true}
      />

      <Text as="h2" color="white" css={{ fontSize: "1.5rem" }}>
        e com a gente não é diferente. Que tal nos ajudar a lembrar para sempre
      </Text>

      <Arrow color="#999" size="2rem" />
    </Container>
  );
};
