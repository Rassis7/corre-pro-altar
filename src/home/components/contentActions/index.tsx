import { Text, LottieAnimation, animations } from "@/shared";
import React, { VFC } from "react";
import {
  Actions,
  Button,
  ButtonText,
  Container,
  LottieAnimationContainer,
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
        <LottieAnimationContainer>
          <LottieAnimation
            lotti={animations.loveSpellBottle}
            width="4rem"
            height="7rem"
          />
          <Text.h1 fontFamily="parisienne">Romulo e Júlia</Text.h1>
          <LottieAnimation
            lotti={animations.loveSpellBottle}
            width="4rem"
            height="7rem"
          />
        </LottieAnimationContainer>
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
