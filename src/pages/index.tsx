import { createElement, useEffect, useMemo, useRef } from "react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  LottieAnimation,
  api,
  animations,
  ToastProvider,
  Text,
} from "@/shared";
import { v4 as uuidv4 } from "uuid";
import { Header } from "@/home/components";

type HomeProps = {
  photos: Record<number, string>[];
};

const DEFAULT_MARGIN_TOP_CARD = [
  "0px",
  "100px",
  "200px",
  "350px",
  "200px",
  "100px",
  "0px",
];
const Home: NextPage<HomeProps> = ({ photos }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gridColumns = gridRef.current?.querySelectorAll(".home-grid-column");

    gridRef.current?.classList.remove("home-animate-inactive");
    gridRef.current?.classList.add("home-animate-active");

    gridColumns?.forEach((element) => {
      element.classList.remove("home-animate");
    });
  }, [gridRef]);

  const gridColumns = useMemo(() => {
    return photos.map((photoObject, index) => {
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
      return createElement(
        "div",
        {
          className: `home-grid-column flex flex-col items-center home-animate`,
          style: { marginTop, transitionDelay: `${delay}ms` },
          key: uuidv4(),
        },
        children
      );
    });
  }, [photos, DEFAULT_MARGIN_TOP_CARD]);

  if (!photos) return null;

  return (
    <ToastProvider>
      <section className="page-container">
        <Head>
          <title>Casório - Romulo e Júlia</title>
        </Head>
        <Header />

        <div className="flex flex-col items-center text-center mt-16">
          <div className="flex items-center">
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
          </div>
          <span className="text-4xl font-medium text-transparent bg-clip-text gradient-bg">
            um texto bonitinho
          </span>
        </div>

        <div className="flex flex-col items-center overflow-hidden relative -top-11">
          <div
            ref={gridRef}
            className="grid grid-cols-[repeat(7,252px)] home-animate-inactive"
          >
            {gridColumns}
          </div>
        </div>
      </section>
    </ToastProvider>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: photos } = await api.get<Record<number, string>[]>("/photos");
  return {
    props: { photos },
    revalidate: 60,
  };
};

export default Home;
