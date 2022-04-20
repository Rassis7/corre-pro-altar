import { tokens, stitches } from "../../styles";

export const StyledButton = stitches.styled(
  "button",
  {
    padding: "1.2rem $m",
    borderRadius: "$small",
    border: "none",
    outline: "none",
    cursor: "pointer",
    h: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.3rem",
    minWidth: "8rem",
  },
  {
    variants: {
      ...tokens.button,
      radii: {
        full: {
          borderRadius: "$full",
        },
        medium: {
          borderRadius: "$medium",
        },
        small: {
          borderRadius: "$small",
        },
      },
      block: {
        true: {
          w: "100%",
          h: "3rem",
        },
      },
    },
    defaultVariants: {
      color: "primary",
      radii: "small",
    },
  }
);
