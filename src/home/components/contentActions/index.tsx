import { Text, LottieAnimation, animations } from "@/shared";
import React, { VFC } from "react";
import {
  Actions,
  Button,
  ButtonText,
  Container,
  TitleContainer,
} from "./styles";
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
          {/* <LottieAnimation
            lotti={animations.loveSpellBottle}
            width="4rem"
            height="7rem"
          /> */}
        </TitleContainer>
        <Button color="primary" onClick={onHandleConfirmationModal}>
          {/* TODO: Criar um text puro */}
          <ButtonText>Confirmar presença</ButtonText>
        </Button>
        <Button color="tertiary" onClick={() => router.push("store")}>
          <ButtonText>Presentear os noivos</ButtonText>
        </Button>
      </Actions>
    </Container>
  );
};
