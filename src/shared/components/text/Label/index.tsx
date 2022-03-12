import { VFC } from "react";
import { stitches } from "../../../styles";
import { HeadingProps } from "../types";

const StyledLabel = stitches.styled("label", {
  fontWeight: 400,
  color: "$gray900",
});

export const Label: VFC<HeadingProps> = ({ children }) => {
  return <StyledLabel>{children}</StyledLabel>;
};
