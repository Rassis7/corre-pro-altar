import React, { useCallback, useRef, useState } from "react";
import { ConfirmationForm } from "./ConfirmationForm";
import { Modal } from "./Modal";
import { AiOutlineLoading } from "react-icons/ai";

interface Props {
  open: boolean;
  onClose: () => void;
}

const confirmationFormRefParam = {
  save: () => {},
};

const ConfirmationModal = ({ onClose, open }: Props): JSX.Element => {
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
      open={open}
      onClose={onClose}
      title="Confirme sua presença"
      content={
        <div className="my-2">
          <p className="text-gray-400 font-semibold mb-4">
            Informe seu Nome e Telefone (de preferência WhatsApp) no campos
            abaixo.
          </p>
          <ConfirmationForm
            ref={confirmationFormRef}
            onClose={onClose}
            onLoading={handleLoading}
          />
        </div>
      }
      footer={
        <>
          <button
            type="button"
            className="btn mx-1  text-base font-medium text-white gradient-bg"
            onClick={handleConfirm}
          >
            {loading ? (
              <div className="flex ">
                <AiOutlineLoading
                  className="animate-spin mr-1"
                  size="16px"
                  color="#fff"
                />
                Salvando...
              </div>
            ) : (
              "Confirmar"
            )}
          </button>
          <button
            type="button"
            className="btn mx-1 bg-white text-base font-medium text-gray-700 hover:bg-gray-50"
            onClick={onClose}
          >
            Fechar
          </button>
        </>
      }
    />
  );
};

export default ConfirmationModal;
