import React, { useCallback, useRef, useState } from "react";
import { ConfirmationForm } from "@/home/components";
import { Button, Modal } from "@/shared";
import { Container, FooterContainer, Label, LoadingIcon } from "./styles";

interface Props {
  // open: boolean;
  onClose: () => void;
}

const confirmationFormRefParam = {
  save: () => {},
};

export const ConfirmationModal = ({ onClose }: Props): JSX.Element => {
  const confirmationFormRef = useRef(confirmationFormRefParam);
  const [loading, setLoading] = useState(false);

  const handleConfirm = useCallback(
    () => confirmationFormRef.current.save(),
    [confirmationFormRef]
  );

  const handleLoading = useCallback(
    (loading: boolean) => setLoading(loading),
    [setLoading]
  );

  return (
    <Modal
      open={true}
      onClose={onClose}
      title="Confirme sua presença"
      content={
        <Container>
          <Label>
            Informe seu Nome e Telefone (de preferência WhatsApp) no campos
            abaixo:
          </Label>
          <ConfirmationForm
            ref={confirmationFormRef}
            onClose={onClose}
            onLoading={handleLoading}
          />
        </Container>
      }
      footer={
        <FooterContainer>
          <Button
            color="secondary"
            onClick={handleConfirm}
            css={{
              width: "90%",
            }}
          >
            {loading ? (
              <div>
                <LoadingIcon size="1rem" color="#fff" />
                {" Salvando..."}
              </div>
            ) : (
              "Confirmar"
            )}
          </Button>
          <Button
            color="error"
            onClick={onClose}
            css={{
              width: "90%",
            }}
          >
            Fechar
          </Button>
        </FooterContainer>
      }
    />
  );
};
