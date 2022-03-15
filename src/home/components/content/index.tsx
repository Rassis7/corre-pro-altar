import { ReactNode, VFC, useMemo, createElement } from 'react'
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import {
  LottieAnimation,
  services,
  animations,
  context,
  Text,
} from "@/shared";
import { Container, GridContainer, TitleContainer, Grid, GridColumn } from './styles';

type Props = {
  photos: Record<number, string>[]
}

const DEFAULT_MARGIN_TOP_CARD = [
  "0px",
  "100px",
  "200px",
  "350px",
  "200px",
  "100px",
  "0px",
];

export const Content: VFC<Props> = ({photos}) => {
  // const gridRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const gridColumns = gridRef.current?.querySelectorAll(".home-grid-column");

  //   gridRef.current?.classList.remove("home-animate-inactive");
  //   gridRef.current?.classList.add("home-animate-active");

  //   gridColumns?.forEach((element) => {
  //     element.classList.remove("home-animate");
  //   });
  // }, [gridRef]);

  const GridColumns = useMemo(() => {
    const photosColumn = photos.map((photoObject, index) => {
      const children = Object.values(photoObject).map((url) => {
        const image = (
          <Image
            className="block"
            src={url}
            alt={url}
            loading="lazy"
            layout="intrinsic"
            objectFit="fill"
            width={251}
            height={350}
          />
        );

        return createElement(
          "div",
          {
            className: "home-grid-item overflow-hidden",
            key: uuidv4(),
          },
          image
        );
      });

      const delay = 250 * index;
      const marginTop = DEFAULT_MARGIN_TOP_CARD[index];

      return (
          <GridColumn
            key={uuidv4()}
            css={{
              marginTop,
              transitionDelay:`${delay}ms`
            }}
          >
            {children}
          </GridColumn>
      )
    });

    return (
      <Grid>{photosColumn}</Grid>
    )
  }, [photos, DEFAULT_MARGIN_TOP_CARD]);

  return (
    <>
    <Container>
    <TitleContainer>
      <LottieAnimation
        lotti={animations.loveSpellBottle}
        width="4rem"
        height="7rem"
      />
      <Text.h1 fontFamily="parisienne">Romulo e Júlia</Text.h1>
      <LottieAnimation
        lotti={animations.loveSpellBottle}
        width="4rem"
        height="7rem"
      />
    </TitleContainer>
    <Text.h3>
      um texto bonitinho
    </Text.h3>
  </Container>

    <GridContainer>
      {GridColumns}
    </GridContainer>
  </>
  )
}

