import {
  animations,
  Button,
  LottieAnimation,
  Modal,
  Text,
  Flex,
} from "@/shared";
import { useRouter } from "next/router";
import { Content, LottieContainer } from "./styles";

export const SuccessModal = () => {
  const router = useRouter();

  const onClose = () => router.push("/store");

  return (
    <Modal
      open={true}
      onClose={onClose}
      title="Sucesso!"
      content={
        <Content
          flexDirection="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Text as="h2" color="gray" fontSize="regular">
            Recebemos sua mensagem, obrigado ❤️ !!!
          </Text>
          <br />
          <LottieContainer>
            <LottieAnimation
              lotti={animations.confirmation}
              width="30vw"
              height="auto"
              loop={true}
            />
          </LottieContainer>
        </Content>
      }
      footer={
        <Flex gap="1rem" flexDirection="column">
          <Button block color="secondary" onClick={() => router.push("/store")}>
            Voltar pra a Loja!
          </Button>
          <Button block color="disabled" onClick={() => router.push("/")}>
            Página inicial!
          </Button>
        </Flex>
      }
    />
  );
};
