import { animations, LottieAnimation, Text } from "@/shared";
import { stitches } from "@/shared/styles";

const Container = stitches.styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  gap: "$s",
  padding: "$m",
  height: "100vh",
  width: "100vw",
  overflow: "hidden",
});

export const Error = () => {
  return (
    <Container>
      <LottieAnimation
        lotti={animations.heartBreak}
        width="20%"
        height="auto"
        loop={true}
      />

      <Text as="h1" fontSize="medium" color="gray" css={{ fontSize: "1.8rem" }}>
        Opsss, no momento só funcionamos em celular e tablet
      </Text>

      <Text as="h3" color="gray" css={{ fontSize: "1rem" }}>
        Logo logo estaremos atendendo 100% em desktops
      </Text>
    </Container>
  );
};
