import * as React from "react";
import { Flex } from "@chakra-ui/react";
import Logo from "@components/logo/Logo";
import { BREAKPOINT_LG } from "@utils/constants";

export default function Header() {
  return (
    <Flex
      as="header"
      position="fixed"
      w="100%"
      h="8rem"
      bg="white"
      shadow="base"
      zIndex={20}
    >
      <Flex
        align="center"
        justify="space-between"
        w={BREAKPOINT_LG}
        m="auto"
        px={[4, 8, 12]}
      >
        <Logo />
      </Flex>
    </Flex>
  );
}
