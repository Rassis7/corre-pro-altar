import React, { useRef } from "react";
import { ConfirmationForm } from "./ConfirmationForm";
import { Modal } from "./Modal";

interface Props {
  open: boolean;
  onClose: () => void;
}

const confirmationFormRefParam = {
  save: () => {},
};

const ConfirmationModal = ({ onClose, open }: Props): JSX.Element => {
  const confirmationFormRef = useRef(confirmationFormRefParam);

  const handleConfirm = () => confirmationFormRef.current.save();

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
          <ConfirmationForm ref={confirmationFormRef} />
        </div>
      }
      footer={
        <>
          <button
            type="button"
            className="btn mx-1 bg-green-600 text-base font-medium text-white hover:bg-green-700"
            onClick={handleConfirm}
          >
            Confirmar
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
