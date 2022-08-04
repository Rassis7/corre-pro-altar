import { stitches } from "@/shared";

export const Main = stitches.styled("main", {
  position: "relative",
  overflow: "hidden",
  height: "100vh",
  width: "100vw",
  padding: 0,
  margin: 0,
  color: "$gray50",
});

export const Wrapper = stitches.styled("section", {
  opacity: 0.9,
});

export const Image = stitches.styled("img", {
  objectFit: "cover",
  borderRadius: "0.33rem",
  display: "inline-block",
  width: "100vw",
  height: "100vh",
  verticalAlign: "middle",
});
