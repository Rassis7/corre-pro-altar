import { stitches } from "@/shared/styles";

export const ErrorMessage = stitches.styled("p", {
  color: "$red500",
  fontSize: "0.8rem",
  px: "$s",
});

export const Form = stitches.styled("form", {
  marginTop: "$l",
});

export const FormGroup = stitches.styled("div", {
  width: "100%",
  "@bp2": {
    maxWidth: "55rem",
  },
});
