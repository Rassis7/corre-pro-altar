import { useMemo, useState, VFC } from "react";
import { ConfirmationModal } from "../confirmationModal/ConfirmationModal";
import { ContentActions } from "../contentActions";
import { Main, Image } from "./styles";
import { useMediaQuery } from "@/shared/hooks";

type ContentProps = {
  background: string;
};

export const Content: VFC<ContentProps> = ({ background }) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const isMobile = useMediaQuery("(max-width: 800px)");

  const onHandleConfirmationModal = () =>
    setShowConfirmationModal((show) => !show);

  const imageSrc = useMemo(
    () => `/mosaic/${!isMobile ? "desktop.webp" : background}`,
    [isMobile, background]
  );

  return (
    <Main>
      <Image src={imageSrc} alt="home" loading="lazy" layout="fill" />

      <ContentActions onHandleConfirmationModal={onHandleConfirmationModal} />
      {showConfirmationModal && (
        <ConfirmationModal onClose={onHandleConfirmationModal} />
      )}
    </Main>
  );
};
