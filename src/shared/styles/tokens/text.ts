import { theme } from "@/root/stitches.config";

export const text = {
  color: {
    primaryLight: {
      color: theme.colors.purple200,
    },
    primary: {
      color: theme.colors.primary,
    },
    primaryDark: {
      color: theme.colors.purple700,
    },
    secondaryLight: {
      color: theme.colors.green200,
    },
    secondaryDark: {
      color: theme.colors.green700,
    },
    secondary: {
      color: theme.colors.secondary,
    },
    tertiary: {
      color: theme.colors.tertiary,
    },
    error: {
      color: theme.colors.red500,
    },
    white: {
      color: theme.colors.white,
    },
    gray: {
      color: theme.colors.gray100,
    },
  },
  fontFamily: {
    parisienne: {
      fontFamily: theme.fonts.parisienne,
    },
    sans: {
      fontFamily: theme.fonts.sans,
    },
  },
  fontSize: {
    extraSmall: { fontSize: "0.25rem" },
    small: { fontSize: "0.5rem" },
    regular: { fontSize: "1rem" },
    medium: { fontSize: "2rem" },
    large: { fontSize: "3rem" },
    extraLarge: { fontSize: "4rem" },
  },
};
