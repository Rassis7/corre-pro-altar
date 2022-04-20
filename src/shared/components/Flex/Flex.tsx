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
  onClick?: () => void;
  css?: StitchesTypes.CSS;
};

const StyledFlex = stitches.styled("div", { display: "flex" });

export const Flex: VFC<FlexType> = ({ children, onClick, ...rest }) => {
  return (
    <StyledFlex css={{ ...rest }} onClick={onClick}>
      {children}
    </StyledFlex>
  );
};
