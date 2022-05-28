import { Fragment, useCallback } from "react";
// import * as Dialog from "@radix-ui/react-dialog";
import { Wrapper, Title, TitleContainer, FooterContainer } from "./styled";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import { BsChevronCompactDown } from "react-icons/bs";
import { useMediaQuery } from "@/shared/hooks";

interface Props {
  open: boolean;
  onClose: () => void;
  title: string | JSX.Element;
  content: JSX.Element;
  footer?: JSX.Element;
}

export const Modal = ({
  open,
  content,
  footer,
  title,
  onClose,
}: Props): JSX.Element => {
  const isBp1 = useMediaQuery("(max-width: 425px)");

  const handleChange = useCallback(
    (isOpen: boolean) => {
      !isOpen && onClose();
    },
    [onClose]
  );

  if (!open) {
    return <Fragment />;
  }

  return (
    <SwipeableBottomSheet open={open} onClose={onClose} onChange={handleChange}>
      <Wrapper>
        <TitleContainer>
          {isBp1 && <BsChevronCompactDown size="2rem" color="#666" />}
          <Title>{title}</Title>
        </TitleContainer>
        {content}
        {footer && <FooterContainer>{footer}</FooterContainer>}
      </Wrapper>
    </SwipeableBottomSheet>
  );
};
