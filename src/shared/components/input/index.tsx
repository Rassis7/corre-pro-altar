import { VariantProps, CSS } from "@stitches/react";
import { InputHTMLAttributes, VFC } from "react";
import { StyledInput } from "./styles";

type VariantsType = VariantProps<typeof StyledInput>;
type InputType = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

type InputProps = CSS &
  VariantsType &
  InputType & {
    type: "email" | "number" | "password" | "search" | "tel" | "text" | "url";
  };

export const Input: VFC<InputProps> = ({
  variant,
  disabled,
  type,
  ...rest
}) => {
  return (
    <StyledInput
      disabled={disabled}
      {...rest}
      type={type}
      variant={disabled ? "disabled" : variant}
    />
  );
};
