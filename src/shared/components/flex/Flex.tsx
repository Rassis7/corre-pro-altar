import StitchesTypes, { stitches } from "@/shared/styles";
import { Property } from "@stitches/react/types/css";
import { ReactNode, VFC } from "react";

type FlexBoxProps = {
  justifyContent?: Property.JustifyContent;
  alignItems?: Property.AlignItems;
  gap?: Property.Gap;
  flexDirection?: Property.FlexDirection;
};

type FlexType = FlexBoxProps & {
  children: ReactNode;
  css?: StitchesTypes.CSS;
  onClick?: () => void;
};

const StyledFlex = stitches.styled("div", { display: "flex" });

export const Flex: VFC<FlexType> = ({
  children,
  onClick,
  justifyContent,
  alignItems,
  gap,
  flexDirection,
  css,
  ...rest
}) => {
  return (
    <StyledFlex
      css={{ justifyContent, alignItems, gap, flexDirection, ...css }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledFlex>
  );
};
