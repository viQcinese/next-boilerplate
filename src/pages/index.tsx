import React from "react";
import {
  Box,
  CustomTheme,
  Heading,
  Text,
  useTheme,
  Button,
} from "@chakra-ui/react";

export default function Home() {
  const { gradient } = useTheme<CustomTheme>();

  return (
    <Box bgGradient={gradient.main} color="white" p={6}>
      <Heading>Heading font is ITC Officina Serif</Heading>
      <Text>Body font is Red Hat Text</Text>
      <Button size="sm" isDisabled>
        Consulte agora por
        <Text ml={2} fontWeight={700}>
          R$ 79,90!
        </Text>
      </Button>
      <Button size="md">Assine Já</Button>
      <Text fontSize={["1rem", "2rem", "3rem", "4rem", "5rem", "6rem"]}>
        Responsive font size
      </Text>
    </Box>
  );
}
