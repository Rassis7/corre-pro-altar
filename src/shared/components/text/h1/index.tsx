import { VFC } from "react";
import { HeadingProps } from "../types";
import { stitches } from "../../../styles";
import type StitchesTypes from "../../../styles";

const StyledH1 = stitches.styled(
  "h1",
  {
    fontWeight: 700,
    color: "$gray100",
    fontSize: "2.5rem",
  },
  {
    variants: {
      fontFamily: {
        parisienne: {
          fontFamily: "$parisienne",
        },
      },
    },
  }
);

type H1Props = StitchesTypes.VariantProps<typeof StyledH1> & HeadingProps;

export const H1: VFC<H1Props> = ({ children, ...rest }) => (
  <StyledH1 {...rest}>{children}</StyledH1>
);
