import { useContext, VFC } from "react";
import { StoreContext } from "@/store";
import { Modal, Button } from "@/shared";
import { GiftName, GiftPrice, Paragraph, TextWrapper } from "./styles";
import { Flex } from "@/shared/components/flex";

export const PaymentModal: VFC = () => {
  const { gift, selectGift } = useContext(StoreContext);

  const handleGoToLink = (link?: string) => link && window.open(link, "_blank");
  const onClose = () => selectGift();

  if (!gift) return null;

  return (
    <Modal
      open={true}
      onClose={onClose}
      title="Um gesto de carinho"
      content={
        <>
          <TextWrapper>
            <Paragraph>
              {gift?.description !== ""
                ? gift?.description
                : 'Clique em "Presentear" e você será enviado o mercado pago, onde é totalmente seguro e com opções de pagamento no Cartão, Pix ou Boleto'}
            </Paragraph>
          </TextWrapper>

          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <GiftName>{gift.name}</GiftName>
            <GiftPrice>{gift.priceWithTax}</GiftPrice>
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
            Presentear
          </Button>
          <Button block color="error" onClick={onClose}>
            Voltar
          </Button>
        </Flex>
      }
    />
  );
};
