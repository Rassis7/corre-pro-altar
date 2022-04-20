import { Text, LottieAnimation, animations, Button } from "@/shared";
import React, { VFC } from "react";
import { Actions, Container, TitleContainer, ButtonGroup } from "./styles";
import { useRouter } from "next/router";

type ContentActionsType = {
  onHandleConfirmationModal: () => void;
};

export const ContentActions: VFC<ContentActionsType> = ({
  onHandleConfirmationModal,
}) => {
  const router = useRouter();

  return (
    <Container>
      <Actions>
        <LottieAnimation
          lotti={animations.rings}
          width="7rem"
          height="4.5rem"
          loop={false}
        />
        <TitleContainer>
          {/* <LottieAnimation
            lotti={animations.loveSpellBottle}
            width="4rem"
            height="7rem"
          /> */}
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
      </Actions>
    </Container>
  );
};
