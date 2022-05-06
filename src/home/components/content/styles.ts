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

export const Container = stitches.styled("section", {
  display: "grid",
  gridGap: "0.65rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gridAutoRows: "12.5rem",
  gridAutoFlow: "dense",
  opacity: 0.9,
});

const FlexCentered = stitches.styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const GridItemWide = stitches.styled(FlexCentered, {
  gridColumn: "span 2",
});

export const GridItemTall = stitches.styled(FlexCentered, {
  gridRow: "span 2",
});

export const GridItemBig = stitches.styled(FlexCentered, {
  gridRow: "span 2",
  gridColumn: "span 2",
});

// export const Image = stitches.styled(NextImage, {
export const Image = stitches.styled("img", {
  objectFit: "cover",
  borderRadius: "$medium",
  display: "block",
  width: "100%",
  height: "100%",
});
