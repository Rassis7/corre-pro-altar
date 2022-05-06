import { stitches } from "@/shared/styles";
import { IoArrowDown } from "react-icons/io5";

export const Container = stitches.styled("div", {
  width: "100vw",
  height: "100vh",
  textAlign: "center",
  padding: "$m",
  marginTop: "$m",
  position: "relative",
});

const bounce = stitches.keyframes({
  "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
  "40%": { transform: "translateY(-25px)" },
  "60%": { transform: "translateY(-15px)" },
});

export const Arrow = stitches.styled(IoArrowDown, {
  position: "absolute",
  bottom: "1.5rem",

  animation: `${bounce} 2s infinite`,
});

//   -moz-animation: bounce 2s infinite;
// -webkit-animation: bounce 2s infinite;
