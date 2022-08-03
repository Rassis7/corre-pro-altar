import React from "react";
import { stitches } from "@/shared/styles";
import { IoArrowDown } from "react-icons/io5";
import { useMediaQuery } from "@/shared/hooks";

const bounce = stitches.keyframes({
  "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
  "40%": { transform: "translateY(-25px)" },
  "60%": { transform: "translateY(-15px)" },
});

const StyledArrow = stitches.styled(IoArrowDown, {
  animation: `${bounce} 2s infinite`,
  zIndex: 9999,
});

export const Arrow = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return <StyledArrow color="#999" size={isDesktop ? "5vw" : "2rem"} />;
};
