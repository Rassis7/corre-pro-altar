import { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content, Title, Container } from "./styled";

interface Props {
  open: boolean;
  onClose: () => void;
  title: string | JSX.Element;
  content: ReactNode;
  footer: ReactNode;
}

export const Modal = ({ open, content, footer, title }: Props) => (
  <Dialog.Root open={open}>
    <Dialog.Trigger />
    <Dialog.Portal>
      <Overlay>
        <Content>
          <Container>
            <Title>{title}</Title>
          </Container>
          {content}
          <Container>{footer}</Container>
        </Content>
      </Overlay>
    </Dialog.Portal>
  </Dialog.Root>
);
