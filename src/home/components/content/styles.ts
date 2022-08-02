import { stitches } from "@/shared";
import { default as NextImage } from "next/image";

export const Main = stitches.styled("main", {
  position: "relative",
  overflow: "hidden",
  height: "100vh",
  width: "auto",
  padding: 0,
  margin: 0,
  color: "$gray50",
});

export const Image = stitches.styled(NextImage, {
  opacity: 0.8,
});
