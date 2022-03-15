import { createStitches, globalCss } from "@stitches/react";

const { styled, css, theme, getCssText } = createStitches({
  theme: {
    colors: {
      black: "#151522",
      gray900: "#333",
      gray400: "#666",
      gray200: "#999",
      gray50: "#E4E4E4",
      white: "#fff",

      purple700: "#56279E",
      purple500: "#8854D0",
      purple200: "#BB82FF",
      green700: "#00AB53",
      green500: "#26DE81",
      green200: "#6EFFB1",
      blue700: "#2F80ED",
      blue500: "#2D9CDB",
      blue200: "#56CCF2",
      red500: "#EB5757",
      orange500: "#F2994A",
      yellow500: "#F2C94C",

      // alias
      primary: "$purple500",
      secondary: "$green500",
      tertiary: "$blue500",
      link: "$blue500",
      background: "$gray50",
      border: "$gray900",
    },
    space: {
      xs: "0.25rem",
      s: "0.5rem",
      m: "1rem",
      l: "2rem",
      xl: "3rem",
    },
    radii: {
      extraSmall: "0.25rem",
      small: "1rem",
      medium: "1.5rem",
      full: "50%",
      extraLarger: "99rem",
    },
    fonts: {
      sans: "Roboto, sans-serif",
      parisienne: "Parisienne, cursive",
    },
  },
  utils: {
    px: (value:string|number) => ({
      paddingLeft:value,
      paddingRight:value,
    }),
    py: (value:string|number) => ({
      paddingTop:value,
      paddingBottom:value,
    }),
    my: (value:string|number) => ({
      marginLeft:value,
      marginRight:value,
    }),
    mx: (value:string|number) => ({
      marginTop:value,
      marginBottom:value,
    }),
  }
});

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  body: {
    fontFamily: theme.fonts.sans,
    fontSize: "16px",
    padding: "$l",
    backgroundColor: "$background",
    width: "100vw",
    height: "100vh",
  },
});

export { styled, css, globalStyles, theme, getCssText  };
