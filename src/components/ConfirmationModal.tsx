import React from "react";
import { useForm } from "react-hook-form";
import ConfirmationForm from "./ConfirmationForm";
import { Modal } from "./Modal";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ConfirmationModal = ({ onClose, open }: Props): JSX.Element => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Confirme sua presença"
      content={
        <>
          <div className="mt-2">
            <p className="text-gray-400 font-semibold">
              Informe seu Nome e Telefone (de preferência WhatsApp) no campos
              abaixo.
            </p>
          </div>
          <ConfirmationForm />
        </>
      }
      footer={
        <>
          <button
            type="button"
            className="btn mx-1 bg-green-600 text-base font-medium text-white hover:bg-green-700"
            // onClick={save}
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
