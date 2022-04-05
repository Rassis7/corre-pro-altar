import { CSS, VariantProps } from "@stitches/react";
import { ReactNode, HtmlHTMLAttributes, VFC, memo } from "react";
import { StyledButton } from "./styles";

type ButtonType = CSS &
  VariantProps<typeof StyledButton> &
  Omit<HtmlHTMLAttributes<HTMLButtonElement>, "color"> & {
    children: ReactNode;
  };

export const Button: VFC<ButtonType> = memo(({ children, color, ...rest }) => {
  return (
    <StyledButton {...rest} color={color}>
      {children}
    </StyledButton>
  );
});
