import { InferGetStaticPropsType } from "next";
import { gql } from "@apollo/client";
import {
  Box,
  Button,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Layout from "@components/layout/Layout";
import SpecialtyCard from "@components/specialty-card/SpecialtyCard";
import SubscriptionCard from "@components/subscription-card/SubscriptionCard";
import client from "@app/apollo/client";
import { GetHomePage } from "@app/types/__generated__/GetHomePage";

export default function HomePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { pageHome, subscriptions } = props;
  const { title, description } = pageHome;

  return (
    <Layout title="Início">
      <Layout.Section
        backgroundImage={[
          "linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/hero.png')",
          "linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent), url('/images/hero.png')",
        ]}
        backgroundPosition={["70% 0", "center"]}
        backgroundRepeat="no-repeat"
        py={[24, 16]}
      >
        <Box w={["330px", "440px"]}>
          <Heading fontSize={["3.2rem", "3.2rem", "4.4rem"]} color="white">
            {title}
          </Heading>
          <Text mt={6} fontSize={["1.6rem", "1.6rem", "1.8rem"]} color="white">
            {description}
          </Text>
          <HStack mt={6} spacing={4}>
            <Button>Assine Já!</Button>
            <Button
              display={["none", "initial"]}
              variant="outline"
              colorScheme="none"
              borderColor="white"
              color="white"
              _hover={{ bg: "rgba(0, 102, 204, 0.2)" }}
              _active={{ bg: "rgba(0, 102, 204, 0.4)" }}
            >
              Veja como funciona
            </Button>
          </HStack>
        </Box>
      </Layout.Section>
      <Layout.Section
        backgroundImage={["none", "none", "url('/images/bg-decoration-1.png')"]}
        backgroundPosition="right bottom"
        backgroundRepeat="no-repeat"
        color="text.light"
      >
        <Heading fontSize={["3rem", "3.8rem"]}>
          Escolha a assinatura ideal
        </Heading>
        <Text mt={4} fontSize={["1.6rem", "1.8rem"]}>
          Conheça em detalhes nossas assinaturas e encontre a melhor opção para
          você e sua família
        </Text>
        <SimpleGrid mt={8} columns={[1, 2, 2, 4]} spacing={[8, 12]}>
          {subscriptions?.map((subscription) => (
            <SubscriptionCard key={subscription.name} {...subscription} />
          ))}
        </SimpleGrid>
      </Layout.Section>
      <Layout.Section bg="background.secondary" color="text.light">
        <Heading fontSize={["3rem", "3.8rem"]}>Consultas Avulsas</Heading>
        <Text mt={4} fontSize={["1.6rem", "1.8rem"]}>
          Consulte agora mesmo com nossos profissionais
        </Text>
        <SimpleGrid mt={8} columns={[1, 2, 2, 3]} spacing={[8, 12]}>
          {Array.from({ length: 9 }, (_, index) => (
            <SpecialtyCard key={index} title="Clínico Geral" />
          ))}
        </SimpleGrid>
      </Layout.Section>
    </Layout>
  );
}

const GET_HOME_PAGE = gql`
  query GetHomePage {
    pageHome {
      title
      description
    }
    subscriptions {
      name
      description
      value
      annualSaving
      features
    }
  }
`;

export async function getStaticProps() {
  const { data } = await client.query<GetHomePage>({
    query: GET_HOME_PAGE,
  });

  return {
    props: { ...data },
  };
}
