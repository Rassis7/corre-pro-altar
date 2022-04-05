import { theme } from "@/root/stitches.config";

export const button = {
  color: {
    primary: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.white,
      "&:hover": {
        filter: "brightness(95%)",
        transitionDelay: "0.1s",
      },
    },
    secondary: {
      backgroundColor: theme.colors.secondary,
      color: theme.colors.white,
      "&:hover": {
        filter: "brightness(95%)",
        transitionDelay: "0.1s",
      },
    },
    tertiary: {
      backgroundColor: theme.colors.tertiary,
      color: theme.colors.white,
    },
    error: {
      backgroundColor: theme.colors.red500,
      color: theme.colors.white,
    },
    disabled: {
      backgroundColor: theme.colors.gray50,
      color: theme.colors.gray400,
      "&:hover": {
        backgroundColor: theme.colors.gray50,
      },
    },
  },
};
