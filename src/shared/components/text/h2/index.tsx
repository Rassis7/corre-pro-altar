import { VFC } from "react";
import { stitches } from "../../../styles";
import { HeadingProps } from "../types";

const StyledH2 = stitches.styled("h2", {
  fontWeight: 600,
  color: "$gray400",
  fontSize: "2rem",
});

export const H2: VFC<HeadingProps> = ({ children }) => (
  <StyledH2>{children}</StyledH2>
);
