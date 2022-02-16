import { VFC } from "react";
import { HeadingProps } from "../types";
import type * as Stitches from "@stitches/react";
import { styled } from "@/shared";

const StyledH1 = styled(
  "h1",
  {
    fontWeight: 700,
    color: "$gray400",
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

type H1Props = Stitches.VariantProps<typeof StyledH1> & HeadingProps;

export const H1: VFC<H1Props> = ({ children, ...rest }) => (
  <StyledH1 {...rest}>{children}</StyledH1>
);
