import { Text, LottieAnimation, animations, Button } from "@/shared";
import React, { VFC } from "react";
import { Container, TitleContainer, ButtonGroup } from "./styles";
import { useRouter } from "next/router";
import { Flex } from "@/shared/components/Flex";

type ContentActionsType = {
  onHandleConfirmationModal: () => void;
};

export const ContentActions: VFC<ContentActionsType> = ({
  onHandleConfirmationModal,
}) => {
  const router = useRouter();

  return (
    <Container>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="1rem"
        css={{
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          background: "rgba(0,0,0,0.75)",
        }}
      >
        <LottieAnimation
          lotti={animations.rings}
          width="7rem"
          height="4.5rem"
          loop={false}
        />
        <TitleContainer>
          <Text
            as="h1"
            color="primary"
            fontFamily="parisienne"
            fontSize="large"
          >
            Romulo e Júlia
          </Text>
        </TitleContainer>

        <ButtonGroup>
          <Button
            block
            onClick={onHandleConfirmationModal}
            css={{ marginBottom: "1rem" }}
          >
            Confirmar presença
          </Button>

          <Button block color="tertiary" onClick={() => router.push("store")}>
            Presentear os noivos
          </Button>
        </ButtonGroup>
      </Flex>
    </Container>
  );
};
