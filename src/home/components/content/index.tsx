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

type ContentProps = {
  photos: string[];
};

// TODO: Suavizar o loading, colocar algum efeito, transition, o que for...
export const Content: VFC<ContentProps> = ({ photos }) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const onHandleConfirmationModal = () =>
    setShowConfirmationModal((show) => !show);

  const GridColumns = useMemo(() => {
    return shuffleArray<string>(photos).map((photo) => {
      const components = [GridItemTall, GridItemNormal, GridItemBig];
      const randomComponentValue = components[getGenerateRandomValue(0, 2)];

      const image = <Image src={photo} alt={photo} loading="lazy" />;

      return createElement(randomComponentValue, { key: uuidv4() }, image);
    });
  }, []);

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
