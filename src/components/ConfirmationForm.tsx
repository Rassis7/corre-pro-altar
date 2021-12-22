import {
  forwardRef,
  useCallback,
  useContext,
  useImperativeHandle,
  useState,
} from "react";
import { fauna, q } from "../services/fauna";
import InputMask from "react-input-mask";
import { ToastContext } from "../context/Toast";

type ConfirmationFormRef = {
  save: () => void;
};

type ConfirmationFormProps = {
  onClose: () => void;
  onLoading: (loading: boolean) => void;
};

export const ConfirmationForm = forwardRef<
  ConfirmationFormRef,
  ConfirmationFormProps
>(({ onClose, onLoading }, ref) => {
  const { notify } = useContext(ToastContext);
  const [name, setName] = useState<string>();
  const [phone, setPhone] = useState<string>();

  const handleSubmit = useCallback(async () => {
    if (!name || !phone) return;

    try {
      onLoading(true);
      await fauna.query(
        q.Create(q.Collection("guests"), {
          data: { name, phone },
        })
      );

      notify("Sua presença foi confirmada com sucesso!", { type: "success" });
    } catch (error) {
      console.log(error);
      notify("Ocorreu um erro, tente novamente ou contacte os noivos!", {
        type: "error",
      });
    } finally {
      onClose();
      onLoading(false);
    }
  }, [name, phone, fauna, q]);

  useImperativeHandle(ref, () => ({
    save: () => {
      handleSubmit();
    },
  }));

  return (
    <form>
      <input
        className={`form-input ${name ? "base-input" : "input-error"}`}
        type="text"
        placeholder="Insira seu nome completo"
        onChange={({ currentTarget }) => setName(currentTarget.value)}
      />
      {!name && (
        <p className="text-red-500 text-sm italic">O nome é obrigatório</p>
      )}
      <InputMask
        mask="(99) 99999-9999"
        className={`form-input ${phone ? "base-input" : "input-error"}`}
        placeholder="Insira seu telefone"
        onChange={({ currentTarget }) => setPhone(currentTarget.value)}
      />
      {!phone && (
        <p className="text-red-500 text-sm italic">O telefone é obrigatório</p>
      )}
    </form>
  );
});
