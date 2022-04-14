import { useContext, VFC } from "react";
import { StoreContext } from "@/store";
import { utils, Modal, Button } from "@/shared";
import {
  GiftContainer,
  GiftInfosWrapper,
  GiftName,
  GiftPrice,
  Image,
  Paragraph,
  TextWrapper,
} from "./styles";

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

          <GiftContainer>
            <Image src={gift.image} width="100%" height="100%" />
            <GiftInfosWrapper className="flex flex-col justify-center items-center mx-4">
              <GiftName>{gift.name}</GiftName>
              <GiftPrice>{utils.getPriceInBrl(gift.price)}</GiftPrice>
            </GiftInfosWrapper>
          </GiftContainer>
        </>
      }
      footer={
        <>
          <Button
            color="tertiary"
            onClick={() => handleGoToLink(gift?.buyLink)}
          >
            Acessar
          </Button>
          <Button color="error" onClick={onClose}>
            Voltar para a loja
          </Button>
        </>
      }
    />
  );
};
