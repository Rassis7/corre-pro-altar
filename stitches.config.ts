import {
  createStitches,
  globalCss,
  PropertyValue,
  VariantProps,
  CSS as StitchesCSS,
} from "@stitches/react";

const { styled, css, theme, getCssText, keyframes, config } = createStitches({
  media: {
    bp1: "(min-width: 320px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
  },
  theme: {
    colors: {
      black: "#151522",
      gray900: "#333",
      gray400: "#666",
      gray200: "#999",
      gray100: "#ccc",
      gray50: "#f2f2f2",
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
      background: "$black",
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
      qwitcherGrypen: "Qwitcher Grypen, cursive",
    },
  },
  utils: {
    px: (value: string | number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string | number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    my: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    mx: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),
    w: (value: string) => ({
      width: value,
    }),
    h: (value: string) => ({
      height: value,
    }),

    fontSize: (value: string) => ({
      fontSize: value,
    }),
    textAlign: (value: PropertyValue<"textAlign">) => ({
      textAlign: value,
    }),
  },
});

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  html: {
    width: "100vw",
    overflowX: "hidden",
  },
  body: {
    fontFamily: theme.fonts.sans,
    fontSize: "16px",
    backgroundColor: "$background",
    width: "100vw",
    height: "100vh",
  },
});

export type CSS = StitchesCSS<typeof config>;

export type StitchesComponentProps<Component> = VariantProps<Component> & {
  css?: CSS;
};

export * from "@stitches/react";
export { styled, css, globalStyles, theme, getCssText, keyframes, config };
