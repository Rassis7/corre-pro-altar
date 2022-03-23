import { stitches } from "@/shared";
import { default as NextImage } from "next/image";

export const Main = stitches.styled("main", {
  position: "relative",
  overflow: "hidden",
  height: "100vh",
  width: "100vw",
  padding: 0,
  margin: 0,
  backgroundColor: "$black",
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

export const GridItem = stitches.styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const GridItemWide = stitches.styled(GridItem, {
  gridColumn: "span 2",
});

export const GridItemTall = stitches.styled(GridItem, {
  gridRow: "span 2",
});

export const GridItemBig = stitches.styled(GridItem, {
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
