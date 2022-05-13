import { useMemo, createElement, useState } from "react";
import { getGenerateRandomValue, shuffleArray } from "@/shared/utils";
import { v4 as uuidv4 } from "uuid";
import { ConfirmationModal } from "../confirmationModal/ConfirmationModal";
import { ContentActions } from "../contentActions";
import {
  GridWrapper,
  GridItemWide,
  GridItemTall,
  GridItemBig,
  GridItemNormal,
  Main,
  Image,
} from "./styles";

const PHOTOS = [
  "/J+R209_h.jpg",
  "/J+R210_v.jpg",
  "/J+R211_h.jpg",
  "/J+R212_v.jpg",
  "/J+R213_h.jpg",
  "/J+R214_v.jpg",
  "/J+R215_v.jpg",
  "/J+R209_h.jpg",
  "/J+R210_v.jpg",
];

// TODO: Suavizar o loading, colocar algum efeito, transition, o que for...
export const Content = () => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const onHandleConfirmationModal = () =>
    setShowConfirmationModal((show) => !show);

  const GridColumns = useMemo(() => {
    return shuffleArray<string>(PHOTOS).map((photo) => {
      const components = [GridItemWide, GridItemTall, GridItemNormal];
      let randomComponentValue = components[getGenerateRandomValue(0, 3)];

      // console.log(randomComponentValue.displayName);

      const horizontal =
        randomComponentValue.displayName === "GridItemTall" &&
        photo.match(/^(.*?)_h/);

      const vertical =
        (randomComponentValue.displayName === "GridItemWide" ||
          randomComponentValue.displayName === "GridItemNormal") &&
        photo.match(/^(.*?)_v/);

      if (vertical || horizontal) {
        const components = vertical
          ? [GridItemWide, GridItemNormal]
          : [GridItemTall, GridItemBig];

        randomComponentValue = components[getGenerateRandomValue(0, 1)];
      }

      const image = <Image src={photo} alt={photo} loading="lazy" />;

      return createElement(randomComponentValue, { key: uuidv4() }, image);
    });
  }, []);

  return (
    <Main>
      <GridWrapper>{GridColumns}</GridWrapper>
      {/* <GridWrapper>
        <GridItemWide>
          <Image src="/J+R209_h.jpg" />
        </GridItemWide>
        <GridItemTall>
          <Image src="/J+R210_v.jpg" />
        </GridItemTall>
        <GridItemNormal>
          <Image src="/J+R210_v.jpg" />
        </GridItemNormal>
        
        <GridItemTall>
          <Image src="/J+R210_v.jpg" />
        </GridItemTall>
        <GridItemNormal>
          <Image src="/J+R210_v.jpg" />
        </GridItemNormal>
        <GridItemWide>
          <Image src="/J+R209_h.jpg" />
        </GridItemWide>
        <GridItemTall>
          <Image src="/J+R210_v.jpg" />
        </GridItemTall>
        <GridItemNormal>
          <Image src="/J+R210_v.jpg" />
        </GridItemNormal>
        <GridItemTall>
          <Image src="/J+R210_v.jpg" />
        </GridItemTall>
        <GridItemNormal>
          <Image src="/J+R210_v.jpg" />
        </GridItemNormal>
       
      </GridWrapper> */}
      <ContentActions onHandleConfirmationModal={onHandleConfirmationModal} />
      {showConfirmationModal && (
        <ConfirmationModal onClose={onHandleConfirmationModal} />
      )}
    </Main>
  );
};
