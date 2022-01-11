import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";
import LottieAnimation from "./LottieAnimation";
import rings from "../animations/rings.json";

export const Header = () => {
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const router = useRouter();

  const handleToggleModal = () => setOpenConfirmModal((show) => !show);

  return (
    <>
      <header className="flex justify-between item-center py-4 px-6">
        <div className="flex items-center">
          <LottieAnimation
            lotti={rings}
            width="6rem"
            height="4rem"
            loop={false}
          />
          <h3 className="text-[#AD8138] text-4xl font-light">
            Corre pro altar
          </h3>
        </div>
        <nav className="flex items-center">
          <button onClick={handleToggleModal} className="nav-btn bg-gray-600">
            Confirmar presença
          </button>
          <button
            onClick={() => router.push("store")}
            className="nav-btn bg-red-500 text-gray-100"
          >
            Presentear os noivos
          </button>
        </nav>
      </header>
      {openConfirmModal && (
        <ConfirmationModal
          open={openConfirmModal}
          onClose={handleToggleModal}
        />
      )}
    </>
  );
};
