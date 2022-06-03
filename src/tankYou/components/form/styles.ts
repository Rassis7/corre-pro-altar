import { stitches } from "@/shared";

export const Textarea = stitches.styled(
  "textarea",
  {
    width: "100%",
    borderRadius: "$medium",
    borderColor: "$blue500",
    padding: "1rem",
    fontSize: "inherit",
    color: "$gray200",
    "&:hover": {
      outline: "none",
    },
  },
  {
    variants: {
      variant: {
        error: {
          border: "solid",
          borderColor: "$red500",
          "&:focus": {
            outline: "none",
          },
        },

        info: {
          border: "solid",
          borderColor: "$blue200",
          "&:focus": {
            outline: "none",
          },
        },
      },
    },
  }
);
