import { stitches } from "@/shared/styles";
import {
  Overlay as RadixOverlay,
  Content as RadixContent,
} from "@radix-ui/react-dialog";

export const Overlay = stitches.styled(RadixOverlay, {
  background: "rgba(0 0 0 / 0.5)",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "grid",
  placeItems: "center",
  overflowY: "auto",
});

export const Content = stitches.styled(RadixContent, {
  minWidth: "15rem",
  height: "auto",
  background: "$gray50",
  borderRadius: "$small",
});

export const Container = stitches.styled("div", {
  textAlign: "center",
  width: "100%",
});

export const Title = stitches.styled("h1", {
  color: "$primary",
  fontSize: "2rem",
  fontFamily: "$parisienne",
  padding: "$m",
});
