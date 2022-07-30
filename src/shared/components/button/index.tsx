import StitchesTypes from "@/shared/styles";
import { ReactNode, VFC, memo } from "react";
import { StyledButton } from "./styles";

type ButtonType = StitchesTypes.StitchesComponentProps<typeof StyledButton> & {
  children: ReactNode;
  size?: "regular" | "block";
  onClick?: () => void;
};

export const Button: VFC<ButtonType> = memo(({ children, ...rest }) => {
  return (
    <StyledButton
      {...rest}
      {...(rest.block && {
        css: {
          "@bp2": {
            width: "30rem",
          },
        },
      })}
    >
      {children}
    </StyledButton>
  );
});
