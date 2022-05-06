import { useContext, VFC } from "react";
import { StoreContext } from "@/store";
import { utils, Modal, Button } from "@/shared";
import { GiftName, GiftPrice, Image, Paragraph, TextWrapper } from "./styles";
import { Flex } from "@/shared/components/Flex";

export const PaymentModal: VFC = () => {
  const { gift, selectGift } = useContext(StoreContext);

  const handleGoToLink = (link?: string) => link && window.open(link, "_blank");

  const onClose = () => selectGift();

  if (!gift) return null;

  return (
    <Modal
      open={!!gift}
      onClose={onClose}
      title="Um gesto de carinho"
      content={
        <>
          <TextWrapper className="mt-2">
            <Paragraph>
              Você irá acessar um link do mercado pago totalmente seguro e com
              opções de pagamento no Cartão, Pix ou Boleto
            </Paragraph>
            <Paragraph>
              Por favor, não esqueça também de conferir se o presente está
              correto!
            </Paragraph>
          </TextWrapper>

          <Flex
            justifyContent="center"
            alignItems="center"
            gap="1rem"
            css={{ marginTop: "$m" }}
          >
            <Image src={gift.image} width="100%" height="100%" />
            <Flex
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <GiftName>{gift.name}</GiftName>
              <GiftPrice>{utils.getPriceInBrl(gift.price)}</GiftPrice>
            </Flex>
          </Flex>
        </>
      }
      footer={
        <Flex
          justifyContent="center"
          alignItems="center"
          gap="1rem"
          flexDirection="column"
        >
          <Button
            block
            color="tertiary"
            onClick={() => handleGoToLink(gift?.buyLink)}
          >
            Acessar
          </Button>
          <Button block color="error" onClick={onClose}>
            Voltar para a loja
          </Button>
        </Flex>
      }
    />
  );
};
