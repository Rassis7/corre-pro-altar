import {tokens, stitches} from '../../styles'

export const StyledButton = stitches.styled(
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
