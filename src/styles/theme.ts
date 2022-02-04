import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import {
  BREAKPOINT_2XL,
  BREAKPOINT_XL,
  BREAKPOINT_LG,
  BREAKPOINT_MD,
  BREAKPOINT_SM,
} from "@utils/constants";

const Button = {
  baseStyle: {
    fontWeight: 500,
    borderRadius: "0.6rem",
  },
  defaultProps: {
    colorScheme: "blue",
  },
  sizes: {
    sm: {
      fontSize: "1.4rem",
      px: "1.5rem",
      h: "3.7rem",
    },
    md: {
      fontSize: "1.6rem",
      px: "4rem",
      h: "4.6rem",
    },
  },
};

const customTheme = {
  breakpoints: createBreakpoints({
    sm: BREAKPOINT_SM,
    md: BREAKPOINT_MD,
    lg: BREAKPOINT_LG,
    xl: BREAKPOINT_XL,
    "2xl": BREAKPOINT_2XL,
  }),
  components: {
    Button,
  },
  fonts: {
    heading: "Officina Serif",
    body: "Red Hat Text",
    mono: "Red Hat Text",
  },
  styles: {
    global: {
      html: {
        fontSize: "62.5%",
        fontFamily: "'Red Hat Text', sans-serif",
      },
      body: {
        fontSize: "1.6rem",
        lineHeight: "tall",
        backgroundColor: "#fff",
        overflowX: "hidden",
      },
      "*, *::before, *::after": {
        boxSizing: "border-box",
      },
    },
  },
  colors: {
    background: {
      primary: "#ffffff",
      secondary: "#f7f9fb",
    },
    text: {
      dark: "#39424F",
      light: "#6E7C91",
    },
  },
  gradient: {
    main: "linear-gradient(93.56deg, #523893 5.47%, #26DDAA 94.14%)",
  },
};

export const theme = extendTheme(customTheme);

export type Theme = typeof customTheme;
