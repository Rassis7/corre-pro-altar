import { useState } from "react";
import { useRouter } from "next/router";
import { stitches } from "@/shared/styles";
import { animations, Flex, LottieAnimation, Text } from "@/shared";

const Wrapper = stitches.styled("div", {
  width: "100vw",
  height: "100vh",
});

const Payment = () => {
  const [showIframe, setShowIframe] = useState(false);
  const {
    query: { mpId },
  } = useRouter();

  function handleLoad() {
    // iframeRef.current = "100";
    setShowIframe(true);
  }

  if (!mpId) return null;

  return (
    <Wrapper>
      {!showIframe && (
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="2rem"
          css={{
            textAlign: "center",
            height: "100%",
          }}
        >
          <LottieAnimation
            lotti={animations.loveSpellBottle}
            width="20rem"
            height="15rem"
          />
          <Text
            as="h1"
            fontSize="extraLarge"
            color="secondary"
            fontFamily="qwitcherGrypen"
          >
            Carregando e embrulhando seu presente...
          </Text>
        </Flex>
      )}
      <iframe
        // sandbox={true}
        loading="lazy"
        src={`https://mpago.la/${mpId}`}
        frameBorder="0"
        width={showIframe ? "100%" : "0"}
        height={showIframe ? "100%" : "0"}
        onLoad={handleLoad}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
      />
    </Wrapper>
  );
};

export default Payment;
