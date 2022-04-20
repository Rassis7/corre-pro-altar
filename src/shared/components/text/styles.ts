import { stitches, tokens } from "../../styles";

export const Span = stitches.styled(
  "span",
  {
    width: "100%",
  },
  {
    variants: {
      ...tokens.text,
    },
    defaultVariants: {
      color: "primary",
      fontFamily: "sans",
      fontSize: "regular",
    },
  }
);

export const P = stitches.styled("p", Span);
export const H1 = stitches.styled("h1", Span);
export const H2 = stitches.styled("h2", Span);
export const H3 = stitches.styled("h3", Span);
