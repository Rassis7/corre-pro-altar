import { VFC } from "react";
import {
  animations,
  Arrow,
  Button,
  Flex,
  LottieAnimation,
  Modal,
  Text,
} from "@/shared";
import { useRouter } from "next/router";
import { Content, LottieContainer } from "./styles";

type SuccessModalType = {
  onClose: () => void;
};

export const SuccessModal: VFC<SuccessModalType> = ({ onClose }) => {
  const router = useRouter();

  return (
    <Modal
      open={true}
      onClose={onClose}
      title="Presença confirmada!!"
      content={
        <Content
          flexDirection="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Text as="h2" color="gray" fontSize="regular">
            Que bom que você estará conosco nesse dia tão especial...e
            aproveitando, que tal presentear este belo casal?
          </Text>
          <br />
          <LottieContainer>
            <LottieAnimation
              lotti={animations.confirmation}
              width="35vw"
              height="auto"
              loop={true}
            />
          </LottieContainer>

          <Arrow />
        </Content>
      }
      footer={
        <Flex justifyContent="center" alignItems="center">
          <Button block color="error" onClick={() => router.push("/store")}>
            Presentear os noivos!
          </Button>
        </Flex>
      }
    />
  );
};
