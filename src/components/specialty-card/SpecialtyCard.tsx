import * as React from "react";
import NextLink from "next/link";
import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  Link,
  Text,
  Flex,
} from "@chakra-ui/react";
import { maskCurrency } from "@utils/masks";

type SpecialtyCardProps = {
  title: string;
};

export default function SpecialtyCard(props: SpecialtyCardProps) {
  const { title } = props;

  return (
    <Box
      py={[8, 8, 16]}
      px={[4, 4, 8]}
      bg="background.primary"
      shadow="md"
      color="text.dark"
      overflowX="hidden"
    >
      <HStack spacing={8} alignItems="flex-start">
        <Avatar size="2xl" />
        <Flex direction="column">
          <Heading as="h5" fontFamily="Red Hat Text" fontSize="1.8rem">
            {title}
          </Heading>
          <NextLink href="/" passHref>
            <Link fontSize={["1.4rem", "1.6rem"]} mr="auto">
              Saiba mais
            </Link>
          </NextLink>
          <Button size="sm" mt={6}>
            Consulte agora por
            <Text as="strong" ml={2}>
              {maskCurrency(79.9)}
            </Text>
          </Button>
        </Flex>
      </HStack>
    </Box>
  );
}
