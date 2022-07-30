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

export const GridWrapper = stitches.styled("section", {
  opacity: 0.9,
  "@bp1": {
    display: "grid",
    gridAutoFlow: "dense",
    gridGap: "0.65rem",
    gridTemplateColumns: "repeat(2, minmax(6.25rem, 1fr))",
    gridAutoRows: "6.25rem",
  },
});

const FlexCentered = stitches.styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const GridItemTall = stitches.styled(FlexCentered, {
  gridRow: "span 2",
});

const GridItemBig = stitches.styled(FlexCentered, {
  gridRow: "span 2",
  gridColumn: "span 3",
});

const GridItemNormal = stitches.styled(FlexCentered);

export const Image = stitches.styled("img", {
  objectFit: "cover",
  borderRadius: "0.33rem",
  display: "inline-block",
  width: "100%",
  height: "100%",
  verticalAlign: "middle",

  "@bp2": {
    width: "100vw",
    height: "100vh",
  },
  "@bp3": {
    width: "100vw",
    height: "100vh",
  },
});

GridItemNormal.displayName = "GridItemNormal";
GridItemBig.displayName = "GridItemBig";
GridItemTall.displayName = "GridItemTall";

export { GridItemNormal, GridItemBig, GridItemTall };
