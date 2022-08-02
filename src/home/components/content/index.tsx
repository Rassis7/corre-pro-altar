import { useMemo, useState, VFC } from "react";
import { ConfirmationModal } from "../confirmationModal/ConfirmationModal";
import { ContentActions } from "../contentActions";
import { Wrapper, Main, Image } from "./styles";
import { useMediaQuery } from "@/shared/hooks";

type ContentProps = {
  background: string;
};

export const Content: VFC<ContentProps> = ({ background }) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const onHandleConfirmationModal = () =>
    setShowConfirmationModal((show) => !show);

  const image = useMemo(
    () => (
      <Image
        src={`/mosaic/${!isMobile ? "desktop.webp" : background}`}
        alt="home"
        loading="lazy"
      />
    ),
    [isMobile, background]
  );

  return (
    <Main>
      <Wrapper>{image}</Wrapper>

      <ContentActions onHandleConfirmationModal={onHandleConfirmationModal} />
      {showConfirmationModal && (
        <ConfirmationModal onClose={onHandleConfirmationModal} />
      )}
    </Main>
  );
};
