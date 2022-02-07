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
      h: "3.6rem",
    },
    md: {
      fontSize: "1.6rem",
      px: "4rem",
      h: "4rem",
    },
    lg: {
      fontSize: "1.6rem",
      px: "4rem",
      h: "4.6rem",
    },
  },
};

const Link = {
  baseStyle: {
    color: "blue.500",
    fontWeight: 500,
    _hover: {
      color: "blue.700",
      textDecoration: "none",
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
    Link,
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
    border: "#d6d6d6",
    red: {
      "50": "#FCE8ED",
      "100": "#F8BFCC",
      "200": "#F396AB",
      "300": "#EE6D8A",
      "400": "#EA436A",
      "500": "#E51A49",
      "600": "#B7153A",
      "700": "#89102C",
      "800": "#5C0A1D",
      "900": "#2E050F",
    },
    purple: {
      "50": "#F7E5FF",
      "100": "#E7B8FF",
      "200": "#D88AFF",
      "300": "#C95CFF",
      "400": "#B92EFF",
      "500": "#AA00FF",
      "600": "#8800CC",
      "700": "#660099",
      "800": "#440066",
      "900": "#220033",
    },
    blue: {
      "50": "#E5F2FF",
      "100": "#B8DBFF",
      "200": "#8AC4FF",
      "300": "#5CADFF",
      "400": "#2E96FF",
      "500": "#0066cc",
      "600": "#0059b4",
      "700": "#004C99",
      "800": "#003366",
      "900": "#001933",
    },
    green: {
      "50": "#F5FAEB",
      "100": "#E2F1C6",
      "200": "#D0E8A1",
      "300": "#BEDE7C",
      "400": "#ABD558",
      "500": "#99CC33",
      "600": "#7AA329",
      "700": "#5C7A1F",
      "800": "#3D5214",
      "900": "#1F290A",
    },
  },
  gradient: {
    main: "linear-gradient(93.56deg, #523893 5.47%, #26DDAA 94.14%)",
  },
};

export const theme = extendTheme(customTheme);

export type Theme = typeof customTheme;
