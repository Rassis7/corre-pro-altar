import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { ConfirmationModal } from "@/home/components";
import { LottieAnimation, animations, Text  } from "@/shared";
import { Container, Animation, Nav, Button } from "./styles";

export const Header = () => {
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const router = useRouter();

  const handleToggleModal = () => setOpenConfirmModal((show) => !show);

  return (
    <>
      <Container>
        <Animation>
          <LottieAnimation
            lotti={animations.rings}
            width="6rem"
            height="4rem"
            loop={false}
          />
        </Animation>
        <Nav>
          <Button 
            color="primary" 
            radii="medium" 
            onClick={handleToggleModal}
          >
            Confirmar presença
          </Button>
          <Button
            color="secondary"
            radii="medium"
            onClick={() => router.push("store")}
          >
            Presentear os noivos
          </Button>
        </Nav>
      </Container>
      {openConfirmModal && (
        <ConfirmationModal
          open={openConfirmModal}
          onClose={handleToggleModal}
        />
      )}
    </>
  );
};
