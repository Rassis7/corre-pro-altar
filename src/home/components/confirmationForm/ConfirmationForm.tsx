import {
  forwardRef,
  useCallback,
  useContext,
  useImperativeHandle,
  useState,
} from "react";
import InputMask from "react-input-mask";
import { AppContext } from "@/shared/context";
import { Flex, Input } from "@/shared";
import { ErrorMessage, Form, FormGroup } from "./styles";
import { ConfirmPresence } from "@/home/models";

type ConfirmationFormRef = {
  save: () => void;
};

type ConfirmationFormProps = {
  onClose: () => void;
  onOpenSuccessModal: () => void;
  onLoading: (loading: boolean) => void;
};

export const ConfirmationForm = forwardRef<
  ConfirmationFormRef,
  ConfirmationFormProps
>(({ onOpenSuccessModal, onLoading }, ref) => {
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
      onOpenSuccessModal();
    } catch (error) {
      // TODO: Avisar
      console.error(error);
    } finally {
      onLoading(false);
    }
  }, [name, phone, onLoading, onOpenSuccessModal, setConfirmationLog]);

  useImperativeHandle(ref, () => ({
    save: () => {
      handleSubmit();
    },
  }));

  return (
    <>
      <Form>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="1rem"
        >
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

          <FormGroup>
            <InputMask
              mask="(99) 99999-9999"
              placeholder="Insira seu telefone"
              onChange={({ currentTarget }) => setPhone(currentTarget.value)}
            >
              <Input
                type="tel"
                variant={phone ? "info" : "error"}
                css={{
                  width: "100%",
                }}
              />
            </InputMask>
            {!phone && <ErrorMessage>O telefone é obrigatório</ErrorMessage>}
          </FormGroup>
        </Flex>
      </Form>
    </>
  );
});

ConfirmationForm.displayName = "ConfirmationForm";
