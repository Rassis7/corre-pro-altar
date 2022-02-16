import { styled, tokens } from "@/shared";

export const StyledButton = styled(
  "button",
  {
    padding: "$s",
    borderRadius: "$small",
    border: "none",
    outline: "none",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    },
  }
);
