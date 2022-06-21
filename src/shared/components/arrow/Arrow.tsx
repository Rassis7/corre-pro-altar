import React from "react";
import { stitches } from "@/shared/styles";
import { IoArrowDown } from "react-icons/io5";

const bounce = stitches.keyframes({
  "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
  "40%": { transform: "translateY(-25px)" },
  "60%": { transform: "translateY(-15px)" },
});

const StyledArrow = stitches.styled(IoArrowDown, {
  animation: `${bounce} 2s infinite`,
});

export const Arrow = () => {
  return <StyledArrow color="#999" size="2rem" />;
};
