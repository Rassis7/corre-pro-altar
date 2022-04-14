import { VFC, useMemo, createElement, useState } from "react";
import { getGenerateRandomValue } from "@/shared/utils";
import { v4 as uuidv4 } from "uuid";
import { ConfirmationModal } from "../confirmationModal/ConfirmationModal";
import { ContentActions } from "../contentActions";
import {
  Container,
  GridItemWide,
  GridItemTall,
  Main,
  GridItem,
  Image,
} from "./styles";

type Props = {
  photos: string[];
};

// TODO: Suavizar o loading, colocar algum efeito, transition, o que for...
export const Content: VFC<Props> = ({ photos }) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const onHandleConfirmationModal = () =>
    setShowConfirmationModal((show) => !show);

  // const GridColumns = useMemo(() => {
  //   let newPhotosArray = photos;

  //   return Array(photos.length)
  //     .fill(null)
  //     .map(() => {
  //       const components = [GridItem, GridItemWide, GridItemTall];
  //       const randomComponentValue = components[getGenerateRandomValue(0, 2)];
  //       const randomIndex = getGenerateRandomValue(
  //         0,
  //         newPhotosArray.length - 1
  //       );

  //       const image = (
  //         <Image
  //           src={newPhotosArray[randomIndex]}
  //           alt={newPhotosArray[randomIndex]}
  //           loading="lazy"
  //         />
  //       );

  //       newPhotosArray = newPhotosArray.filter(
  //         (_, index) => index !== randomIndex
  //       );
  //       return createElement(randomComponentValue, { key: uuidv4() }, image);
  //     });
  // }, [photos]);

  return (
    <Main>
      {/* <Container>{GridColumns}</Container> */}
      <ContentActions onHandleConfirmationModal={onHandleConfirmationModal} />
      {showConfirmationModal && (
        <ConfirmationModal onClose={onHandleConfirmationModal} />
      )}
    </Main>
  );
};
