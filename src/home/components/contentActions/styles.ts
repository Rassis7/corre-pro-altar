import { stitches } from "@/shared";

export const Container = stitches.styled("section", {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
});

export const TitleContainer = stitches.styled("div", {
  padding: "$m",
});

export const ButtonGroup = stitches.styled("div", {
  width: "90vw",
});
