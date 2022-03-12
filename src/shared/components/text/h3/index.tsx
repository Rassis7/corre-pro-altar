import { VFC } from "react";
import { stitches } from "../../../styles";
import { HeadingProps } from "../types";

export const StyledH3 = stitches.styled("h2", {
  fontWeight: 500,
  color: "$gray200",
  fontSize: "1.5rem",
});

export const H3: VFC<HeadingProps> = ({ children }) => (
  <StyledH3>{children}</StyledH3>
);
