import {
  forwardRef,
  useCallback,
  useContext,
  useImperativeHandle,
  useState,
} from "react";
import InputMask from "react-input-mask";
import { AppContext } from "@/shared/context";
import { Input } from "@/shared";
import { ErrorMessage, Form, FormGroup } from "./styles";
import { ConfirmPresence } from "@/home/models";

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
  const { setConfirmationLog } = useContext(AppContext);
  const [name, setName] = useState<string>();
  const [phone, setPhone] = useState<string>();

  const handleSubmit = useCallback(async () => {
    if (!name || !phone) return;

    try {
      onLoading(true);

      const params = { name, phone };
      await ConfirmPresence.setConfirmation(params);
      setConfirmationLog(params);

      // notify("Sua presença foi confirmada com sucesso!", { type: "success" });
    } catch (error) {
      // notify("Ocorreu um erro, tente novamente ou contacte os noivos!", {
      //   type: "error",
      // });
    } finally {
      onClose();
      onLoading(false);
    }
  }, [name, phone]);

  useImperativeHandle(ref, () => ({
    save: () => {
      handleSubmit();
    },
  }));

  return (
    <Form>
      <FormGroup>
        <Input
          type="text"
          variant={name ? "info" : "error"}
          placeholder="Insira seu nome completo"
          onChange={({ currentTarget }) => setName(currentTarget.value)}
          css={{
            width: "100%",
          }}
        />
        {!name && <ErrorMessage>O nome é obrigatório</ErrorMessage>}
      </FormGroup>

      <InputMask
        mask="(99) 99999-9999"
        placeholder="Insira seu telefone"
        onChange={({ currentTarget }) => setPhone(currentTarget.value)}
      >
        {(inputProps: unknown) => (
          <Input
            {...inputProps}
            variant={phone ? "info" : "error"}
            type="tel"
            css={{
              width: "100%",
            }}
          />
        )}
      </InputMask>
      {!phone && <ErrorMessage>O telefone é obrigatório</ErrorMessage>}
    </Form>
  );
});
