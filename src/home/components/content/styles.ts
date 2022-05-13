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
  display: "grid",
  gridGap: "0.65rem",
  gridAutoFlow: "dense",
  opacity: 0.9,
  "@bp1": {
    gridTemplateColumns: "repeat(2, minmax(6.25rem, 1fr))",
    gridAutoRows: "6.25rem",
  },
  "@bp2": {
    gridTemplateColumns: "repeat(3, minmax(12.25rem, 1fr))",
    gridAutoRows: "9.37rem",
  },
  "@bp3": {
    gridTemplateColumns: "repeat(auto-fit, minmax(12.25rem, 1fr))",
    gridAutoRows: "12.5rem",
  },
});

const FlexCentered = stitches.styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const GridItemWide = stitches.styled(FlexCentered, {
  gridColumn: "span 2",
});

const GridItemTall = stitches.styled(FlexCentered, {
  gridRow: "span 2",
});

const GridItemBig = stitches.styled(FlexCentered, {
  gridRow: "span 2",
  gridColumn: "span 3",
});

const GridItemNormal = stitches.styled(FlexCentered);

// export const Image = stitches.styled(NextImage, {
export const Image = stitches.styled("img", {
  objectFit: "cover",
  borderRadius: "0.33rem",
  display: "inline-block",
  width: "100%",
  height: "100%",
  verticalAlign: "middle",
});

GridItemNormal.displayName = "GridItemNormal";
GridItemBig.displayName = "GridItemBig";
GridItemTall.displayName = "GridItemTall";
GridItemWide.displayName = "GridItemWide";

export { GridItemNormal, GridItemBig, GridItemTall, GridItemWide };
