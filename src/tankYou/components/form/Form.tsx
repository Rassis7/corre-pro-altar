import React, { useCallback, useContext, useMemo, useState, VFC } from "react";
import { Button, Flex, Input, LoadingIcon, Text } from "@/shared";
import { ToastContext } from "@/shared/context";
import { Message } from "@/tankYou/models";
import { Textarea } from "./styles";

type FormType = {
  slug: string;
};

export const Form: VFC<FormType> = ({ slug }) => {
  const { notify } = useContext(ToastContext);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState<string | undefined>();
  const [message, setMessage] = useState<string | undefined>();

  const isEmpty = useMemo(() => !message || !name, [message, name]);

  const handleSubmit = useCallback(async () => {
    if (!slug || !name || !message) return;

    try {
      setLoading(true);
      await Message.sendMessage({ slug, name, message });
      notify("Sua mensagem foi enviada, obrigado ❤️!!!", { type: "success" });
    } catch (error) {
      notify("Ocorreu um erro, tente novamente ou contacte os noivos!", {
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  }, [slug, name, message, Message]);

  return (
    <Flex flexDirection="column" gap="1rem" css={{ padding: "$l" }}>
      <div>
        <Input
          type="text"
          variant={!name ? "error" : "info"}
          css={{ width: "100%" }}
          value={name}
          onChange={({ currentTarget }) => setName(currentTarget.value)}
        />
        {!name && (
          <Text fontSize="regular" color="error" css={{ padding: "0 $s" }}>
            Insira seu nome
          </Text>
        )}
      </div>

      <div>
        <Textarea
          variant={!message ? "error" : "info"}
          onChange={({ currentTarget }) => setMessage(currentTarget.value)}
          cols={30}
          rows={8}
        >
          {message}
        </Textarea>
        {!message && (
          <Text fontSize="regular" color="error" css={{ padding: "0 $s" }}>
            Insira sua mensagem
          </Text>
        )}
      </div>

      <Button
        block
        color={isEmpty ? "disabled" : "tertiary"}
        radii="medium"
        onClick={() => !isEmpty && handleSubmit()}
      >
        {loading ? (
          <div>
            <LoadingIcon size="1rem" color="#fff" />
            {" Salvando..."}
          </div>
        ) : (
          "Enviar"
        )}
      </Button>
    </Flex>
  );
};