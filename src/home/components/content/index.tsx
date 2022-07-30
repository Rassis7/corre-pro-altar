import { useMemo, createElement, useState, VFC } from "react";
import { getGenerateRandomValue, shuffleArray } from "@/shared/utils";
import { v4 as uuidv4 } from "uuid";
import { ConfirmationModal } from "../confirmationModal/ConfirmationModal";
import { ContentActions } from "../contentActions";
import {
  GridWrapper,
  GridItemTall,
  GridItemBig,
  GridItemNormal,
  Main,
  Image,
} from "./styles";
import { useMediaQuery } from "@/shared/hooks";

type ContentProps = {
  photos: string[];
};

export const Content: VFC<ContentProps> = ({ photos }) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const isNotDesktop = useMediaQuery("(max-width: 768px)");

  const onHandleConfirmationModal = () =>
    setShowConfirmationModal((show) => !show);

  const GridColumns = useMemo(() => {
    if (!isNotDesktop) {
      return <Image src="/mosaic/home.webp" alt="mosaic" loading="lazy" />;
    }

    let shuffled = shuffleArray<string>(photos);
    shuffled = shuffled.slice(0, 15);

    return shuffled.map((photo) => {
      const components = [GridItemTall, GridItemNormal, GridItemBig];
      const randomComponentValue = components[getGenerateRandomValue(0, 2)];

      const image = <Image src={photo} alt={photo} loading="lazy" />;

      return createElement(randomComponentValue, { key: uuidv4() }, image);
    });
  }, [isNotDesktop, photos]);

  return (
    <Main>
      <GridWrapper>{GridColumns}</GridWrapper>

      <ContentActions onHandleConfirmationModal={onHandleConfirmationModal} />
      {showConfirmationModal && (
        <ConfirmationModal onClose={onHandleConfirmationModal} />
      )}
    </Main>
  );
};
