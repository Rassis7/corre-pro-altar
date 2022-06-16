import { Flex } from "@/shared";
import { stitches } from "@/shared/styles";
import { IoArrowDown } from "react-icons/io5";

export const Container = stitches.styled(Flex, {
  marginTop: "$xl",
});

export const TextContainer = stitches.styled("div", {
  marginTop: "$m",
  marginBottom: "$l",
  padding: "$m",
  textAlign: "center",
});

const bounce = stitches.keyframes({
  "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
  "40%": { transform: "translateY(-25px)" },
  "60%": { transform: "translateY(-15px)" },
});

export const Arrow = stitches.styled(IoArrowDown, {
  animation: `${bounce} 2s infinite`,
});
