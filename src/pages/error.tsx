import { animations, Flex, LottieAnimation, Text } from "@/shared";

const Error = () => {
  return (
    <main>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap="$s"
        css={{
          padding: "$m",
          textAlign: "center",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        <LottieAnimation
          lotti={animations.heartBreak}
          width="20%"
          height="auto"
          loop={true}
        />

        <Text
          as="h1"
          fontSize="medium"
          color="gray"
          css={{ fontSize: "1.8rem" }}
        >
          Opsss, no momento só funcionamos em celular e tablet
        </Text>

        <Text as="h3" color="gray" css={{ fontSize: "1rem" }}>
          Logo logo estaremos atendendo 100% em desktops
        </Text>
      </Flex>
    </main>
  );
};

export default Error;
