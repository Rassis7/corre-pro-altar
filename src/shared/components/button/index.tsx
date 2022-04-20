import StitchesTypes from "@/shared/styles";
import { ReactNode, VFC, memo } from "react";
import { StyledButton } from "./styles";

type ButtonType = StitchesTypes.StitchesComponentProps<typeof StyledButton> & {
  children: ReactNode;
};

export const Button: VFC<ButtonType> = memo(({ children, color, ...rest }) => {
  return (
    <StyledButton {...rest} color={color}>
      {children}
    </StyledButton>
  );
});
