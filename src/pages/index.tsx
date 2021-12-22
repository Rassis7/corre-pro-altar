import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import we from "../animations/we.json";
import hearts from "../animations/love-hearts.json";
import LottieAnimation from "../components/LottieAnimation";
import ConfirmationModal from "../components/ConfirmationModal";
import { useRouter } from "next/router";
import { ToastProvider } from "../context/Toast";

const Home: NextPage = () => {
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const router = useRouter();

  const handleToggleModal = () => setOpenConfirmModal((show) => !show);

  return (
    <ToastProvider>
      <div className="page-container justify-center lg:justify-around">
        <Head>
          <title>Create Next App</title>
        </Head>
        <section className="invisible h-0 w-0 mr-0 md:-ml-8 lg:visible lg:-ml-12 lg:w-full lg:h-full lg:mr-4 xl:-ml-28">
          <LottieAnimation lotti={we} width="48vw" height="90vh" />
        </section>

        <section className="flex flex-col justify-center items-center lg:space-y-8 lg:w-full lg:h-full lg:p-14">
          <h1 className="font-wedding text-pink-400 text-5xl">
            Romulo e Júlia
          </h1>

          <LottieAnimation lotti={hearts} width="20rem" height="18rem" />

          <h4 className="font-light text-gray-400 text-center dark:text-gray-200">
            É com muito emoção que convidamos todos amigos e familiares para
            esse casório!
          </h4>
          <section className="flex flex-col space-y-3 justify-evenly w-full lg:flex-row lg:space-y-0">
            <button
              className="btn bg-green-500 hover:bg-green-700"
              onClick={handleToggleModal}
            >
              Confirmar presença
            </button>
            <button
              className="btn bg-blue-500 hover:bg-blue-700"
              onClick={() => router.push("/store")}
            >
              Presentei os noivos
            </button>
          </section>
        </section>
      </div>

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
