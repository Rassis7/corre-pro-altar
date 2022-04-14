import { stitches } from "@/shared/styles";

export const Container = stitches.styled("div", {
  width: "100vw",
});

export const Image = stitches.styled("img", {
  objectFit: "fill",
  width: "100%",
  "@bp1": {
    height: "100vh",
  },
  "@bp2": {
    height: "50vh",
  },
});
