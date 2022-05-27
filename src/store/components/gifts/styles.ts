import { stitches } from "@/shared";

export const GiftsWrapper = stitches.styled("div", {
  textAlign: "center",
});

export const Grid = stitches.styled("section", {
  gridGap: "$xs",
  width: "100%",
  padding: "$l",
  "@bp1": {
    display: "inline-flex",
    overflowX: "auto",
    gap: "$l",
  },
  "@bp2": {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(6.25rem, 1fr))",
  },
  "@bp3": {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(6.25rem, 1fr))",
  },
});

export const GridItem = stitches.styled("div", {
  display: "flex",
  "@bp1": {
    minWidth: "20rem",
    mx: "$s",
  },
  "@bp2": {
    padding: "$s",
  },

  cursor: "pointer",
});

export const Figure = stitches.styled("figure", {
  backgroundColor: "$gray900",
  borderRadius: "$extraSmall",
  "& > figcaption": {
    padding: "$m",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const Value = stitches.styled("p", {
  fontWeight: 400,
  color: "$green200",
  fontSize: "1.2rem",
  textTransform: "bold",
});

export const Image = stitches.styled("img", {
  width: "60vw",
  height: "17rem",
  verticalAlign: "middle",
  display: "inline-block",
  borderStartEndRadius: "10px",
  borderStartStartRadius: "10px",
  borderEndStartRadius: "5px",
  borderEndEndRadius: "5px",
  objectFit: "cover",
  padding: "0.1rem",
});
