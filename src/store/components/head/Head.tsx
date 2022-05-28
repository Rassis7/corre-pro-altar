import { animations, LottieAnimation, Text } from "@/shared";
import { useMediaQuery } from "@/shared/hooks";
import { Arrow, Container, TextContainer } from "./styles";

export const Head = () => {
  const isBp2 = useMediaQuery("(max-width: 768px)");

  return (
    <Container
      justifyContent="space-evenly"
      alignItems="center"
      flexDirection="column"
      css={{
        "@bp2": {
          padding: "6rem",
        },
      }}
    >
      <LottieAnimation
        lotti={animations.planetTravel}
        width={isBp2 ? "70%" : "100%"}
        height="auto"
        loop={true}
      />

      <TextContainer>
        <Text
          as="h1"
          fontSize="medium"
          color="gray"
          css={{ fontSize: "1.8rem" }}
        >
          Presente bom, é aquele que sempre é lembrado...
        </Text>

        <Text as="h2" color="gray" css={{ fontSize: "1rem" }}>
          e com a gente não é diferente. Que tal nos ajudar a lembrar para
          sempre
        </Text>
      </TextContainer>

      <Arrow color="#999" size="2rem" />
    </Container>
  );
};
