import { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import { Mansory } from "@/gallery";
import { animations, Button, Flex, LottieAnimation, Text } from "@/shared";
import { stitches } from "@/shared/styles";
import { useMediaQuery } from "@/shared/hooks";

type GalleryType = {
  photos: string[];
};

const Wrapper = stitches.styled(Flex, {
  width: "100vw",
});

const TitleContainer = stitches.styled(Flex, {
  alignSelf: "center",
  marginTop: "$xl",
  textAlign: "center",
  padding: "0 $l",
  height: "70vh",
});

const Gallery: NextPage<GalleryType> = ({ photos }) => {
  const router = useRouter();

  const isMobile = useMediaQuery("(max-width: 768px)");

  if (!photos.length || typeof window === "undefined") return null;

  return (
    <Wrapper
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="2rem"
    >
      <TitleContainer
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="2rem"
        css={{
          padding: isMobile ? "0 $l" : "0 $xl",
        }}
      >
        <LottieAnimation
          lotti={animations.rings}
          width={isMobile ? "6rem" : "8rem"}
          height="auto"
          loop={false}
        />

        <Text as="h1" fontSize="extraLarge" color="orange">
          Pré Wedding
        </Text>

        <Text as="p" fontSize="medium" color="gray">
          Escolhemos a vibe de Ibitipoca para nossas fotos. Além de sermos
          apaixonados por “Ibiti”, lá foi onde tudo começou! Por isso, nada
          melhor do que contar nossa história nesse cantinho mágico!
        </Text>
      </TitleContainer>
      <Mansory photos={photos} />

      <Button block color="disabled" onClick={() => router.push("/")}>
        Página inicial!
      </Button>
    </Wrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const directoryPath = path.join(process.cwd(), "public");

  const files = fs.readdirSync(directoryPath);
  const photos = files.filter((file) => file.match(/.(webp)$/));

  return { props: { photos } };
};

export default Gallery;
