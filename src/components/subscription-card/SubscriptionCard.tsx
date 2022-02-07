import * as React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import {
  Heading,
  Text,
  Flex,
  Divider,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { maskCurrency } from "@utils/masks";

type SubscriptionCardProps = {
  name: string;
  description: string;
  annualSaving?: number | null;
  value: number;
  features: string[];
};

export default function SubscriptionCard(props: SubscriptionCardProps) {
  const { annualSaving, value, features, name, description } = props;
  return (
    <Flex
      direction="column"
      p={12}
      border="2px solid"
      borderColor={annualSaving ? "green.500" : "border"}
      borderRadius={6}
      position="relative"
      bg="white"
    >
      {annualSaving ? (
        <Text
          as="span"
          position="absolute"
          top={-6}
          color="white"
          fontSize="1rem"
          fontWeight={700}
          textTransform="uppercase"
          bg="green.500"
          px={4}
          py={2}
          borderRadius={100}
        >
          Poupe {maskCurrency(annualSaving)} ao ano
        </Text>
      ) : null}
      <Heading
        as="h5"
        fontFamily="Red Hat Text"
        fontSize="1.6rem"
        fontWeight={500}
      >
        {name}
      </Heading>
      <Flex alignItems="baseline">
        <Text
          color="blue.500"
          fontSize="3.2rem"
          fontWeight={700}
          letterSpacing={-1}
        >
          {maskCurrency(value)}
        </Text>
        <Text fontWeight={500}>/mês</Text>
      </Flex>
      <Text>{description}</Text>
      <Divider my={10} borderColor="border" />
      <List spacing={8} mb={20}>
        {features.map((feature) => (
          <ListItem key={feature} display="flex" alignItems="center">
            <ListIcon
              mr={8}
              as={AiFillCheckCircle}
              fontSize="2.4rem"
              color="green.500"
            />
            <Text
              color="text.dark"
              fontSize="1.4rem"
              fontWeight={500}
              lineHeight="short"
            >
              {feature}
            </Text>
          </ListItem>
        ))}
      </List>
      <Button size="lg" mt="auto" w="100%" alignSelf="flex-end">
        Assine já
      </Button>
    </Flex>
  );
}
