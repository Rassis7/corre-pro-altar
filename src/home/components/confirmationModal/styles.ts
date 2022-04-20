import { stitches } from "@/shared/styles";
import { AiOutlineLoading } from "react-icons/ai";

export const Container = stitches.styled("div", {
  padding: "0 $l $l $l",
});

export const Label = stitches.styled("p", {
  color: "$gray400",
  fontWeight: 500,
  textAlign: "center",
});

export const FooterContainer = stitches.styled("footer", {
  width: "100%",
  gap: "$s",
  paddingBottom: "$l",
});

const spinner = stitches.keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

export const LoadingIcon = stitches.styled(AiOutlineLoading, {
  animation: `${spinner} 1s linear infinite`,
});
