import * as React from "react";
import Head from "next/head";
import { Box, BoxProps } from "@chakra-ui/react";
import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import { BREAKPOINT_LG, BREAKPOINT_XL } from "@utils/constants";

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export default function Layout(props: LayoutProps) {
  const { children, title } = props;

  return (
    <React.Fragment>
      <Head>
        <title>{title ? `${title} | Vida V` : "Vida V"}</title>
      </Head>
      <Header />
      <Box as="main" pt="8rem">
        {children}
      </Box>
      <Footer />
    </React.Fragment>
  );
}
type SectionLayoutProps = BoxProps & {
  children: React.ReactNode;
};

Layout.Section = function SectionLayout(props: SectionLayoutProps) {
  const { children, ...boxProps } = props;

  return (
    <Box maxW={BREAKPOINT_XL} mx="auto" {...boxProps}>
      <Box
        as="section"
        maxW={BREAKPOINT_LG}
        mx="auto"
        px={[4, 8, 12]}
        py={[16, 24]}
      >
        {children}
      </Box>
    </Box>
  );
};
