import { stitches } from "@/shared";

export const Main = stitches.styled("main", {
  position: "relative",
  overflow: "hidden",
  height: "100%",
  width: "100%",
  padding: 0,
  margin: 0,
  color: "$gray50",
});

export const Image = stitches.styled("img", {
  opacity: 0.8,
  objectFit: "cover",
  width: "100vw",
  height: "100vh",
});
