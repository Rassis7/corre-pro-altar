import { createElement, useEffect, useMemo, useRef } from "react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ToastProvider } from "../context/Toast";
import { Header } from "../components/Header";
import { api } from "../services/api";
import Image from "next/image";
import loveSpellBottle from "../animations/love-spell-bottle.json";
import LottieAnimation from "../components/LottieAnimation";
import { v4 as uuidv4 } from "uuid";

type HomeProps = {
  photos: Record<number, string>[];
};

const DEFAULT_MARGIN_TOP_CARD = [
  "0px",
  "160px",
  "320px",
  "480px",
  "320px",
  "160px",
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

      const className = `home-grid-column flex flex-col items-center home-animate delay-${
        200 * index
      }`;
      return createElement(
        "div",
        {
          className,
          style: { marginTop: DEFAULT_MARGIN_TOP_CARD[index] },
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

        <div className="flex flex-col items-center text-center mt-28">
          <div className="flex items-center">
            <LottieAnimation
              lotti={loveSpellBottle}
              width="4rem"
              height="7rem"
            />
            <h1 className="font-wedding text-pink-400 text-6xl font-semibold">
              Romulo e Júlia
            </h1>
            <LottieAnimation
              lotti={loveSpellBottle}
              width="4rem"
              height="7rem"
            />
          </div>
          <span className="text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-600">
            um texto bonitinho
          </span>
        </div>

        <div className="flex flex-col items-center overflow-hidden">
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
