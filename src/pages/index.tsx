import { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import we from "../animations/we.json";
import hearts from "../animations/love-hearts.json";
import LottieAnimation from "../components/LottieAnimation";
import ConfirmationModal from "../components/ConfirmationModal";
import { useRouter } from "next/router";
import { ToastProvider } from "../context/Toast";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const router = useRouter();
  const gridRef = useRef<HTMLDivElement>(null);

  const handleToggleModal = () => setOpenConfirmModal((show) => !show);

  useEffect(() => {
    const gridColumns = gridRef.current?.querySelectorAll(".home-grid-column");

    gridRef.current?.classList.remove("home-animate-inactive");
    gridRef.current?.classList.add("home-animate-active");

    gridColumns?.forEach((element) => {
      element.classList.remove("home-animate");
    });
  }, [gridRef]);

  return (
    <ToastProvider>
      <section className="page-container">
        <Head>
          <title>Casório - Romulo e Julia</title>
        </Head>
        <Header />

        <div className="flex flex-col items-center text-center mt-28">
          <h1 className="font-wedding text-pink-400 text-6xl font-semibold">
            Romulo e Júlia
          </h1>

          <span className="text-5xl font-medium text-red-500">Text1</span>
        </div>

        <div className="flex flex-col items-center overflow-hidden">
          <div
            ref={gridRef}
            className="grid grid-cols-[repeat(7,252px)] home-animate-inactive"
          >
            {/* TODO: Arrumar os mt */}
            <div className="home-grid-column flex flex-col items-center mt-0 home-animate delay-0">
              <div className="home-grid-item"></div>
              <div className="home-grid-item"></div>
              <div className="home-grid-item"></div>
              <div className="home-grid-item"></div>
            </div>
            <div className="home-grid-column flex flex-col items-center mt-[160px] home-animate delay-200">
              <div className="home-grid-item"></div>
              <div className="home-grid-item"></div>
              <div className="home-grid-item"></div>
              <div className="home-grid-item"></div>
            </div>
            <div className="home-grid-column flex flex-col items-center mt-[320px] home-animate delay-400">
              <div className="home-grid-item"></div>
              <div className="home-grid-item"></div>
              <div className="home-grid-item"></div>
              <div className="home-grid-item"></div>
            </div>
            <div className="home-grid-column flex flex-col items-center mt-[480px] home-animate delay-600">
              <div className="home-grid-item"></div>
              <div className="home-grid-item"></div>
              <div className="home-grid-item"></div>
              <div className="home-grid-item"></div>
            </div>
            <div className="home-grid-column flex flex-col items-center mt-[320px] home-animate delay-800">
              <div className="home-grid-item"></div>
              <div className="home-grid-item"></div>
              <div className="home-grid-item"></div>
              <div className="home-grid-item"></div>
            </div>
            <div className="home-grid-column flex flex-col items-center mt-[160px] home-animate delay-1000">
              <div className="home-grid-item"></div>
              <div className="home-grid-item"></div>
              <div className="home-grid-item"></div>
              <div className="home-grid-item"></div>
            </div>
            <div className="home-grid-column flex flex-col items-center mt-0 home-animate delay-1200">
              <div className="home-grid-item"></div>
              <div className="home-grid-item"></div>
              <div className="home-grid-item"></div>
              <div className="home-grid-item"></div>
            </div>
          </div>
        </div>
      </section>

      {openConfirmModal && (
        <ConfirmationModal
          open={openConfirmModal}
          onClose={handleToggleModal}
        />
      )}
    </ToastProvider>
  );
};

export default Home;
