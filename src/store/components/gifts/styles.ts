import { stitches } from "@/shared";

export const GiftsWrapper = stitches.styled("div", {
  textAlign: "center",
});

export const Grid = stitches.styled("section", {
  gridGap: "$xs",
  width: "100%",
  padding: "$l",
  gap: "$m",
  "@bp1": {
    display: "inline-flex",
    overflowX: "auto",
  },
  "@bp2": {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(6.25rem, 1fr))",
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
  fontSize: "1.2rem",
  textTransform: "bold",
});

export const Image = stitches.styled("img", {
  width: "50vw",
  height: "11rem",
  verticalAlign: "middle",
  display: "inline-block",
  borderStartEndRadius: "10px",
  borderStartStartRadius: "10px",
  borderEndStartRadius: "5px",
  borderEndEndRadius: "5px",
  objectFit: "cover",
  padding: "0.1rem",

  "@bp2": {
    width: "40vw",
    height: "9rem",
  },
});
