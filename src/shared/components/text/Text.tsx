import { stitches } from "@/shared";
import { VFC, ReactNode, memo, useMemo, createElement } from "react";

import { H1, H2, H3, P, Span } from "./styles";

type AS = "span" | "p" | "h1" | "h2" | "h3";

type TextType = stitches.StitchesComponentProps<typeof Span> & {
  children: ReactNode;
  as?: AS;
};

export const Text: VFC<TextType> = memo(
  ({ children, as = "span", ...rest }) => {
    const Element = useMemo(() => {
      switch (as) {
        case "p":
          return P;
        case "h1":
          return H1;
        case "h2":
          return H2;
        case "h3":
          return H3;
        default:
          return Span;
      }
    }, [as]);

    return createElement(Element, { ...rest }, children);
  }
);
