import { InferGetStaticPropsType } from "next";
import { gql } from "@apollo/client";
import { Box, CustomTheme, Heading, useTheme } from "@chakra-ui/react";
import client from "@app/apollo/client";
import { GetHomePage } from "@app/types/__generated__/GetHomePage";

export default function HomePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { gradient } = useTheme<CustomTheme>();
  const { title } = props.pageHome;

  return (
    <Box bgGradient={gradient.main} color="white" p={6}>
      <Heading>{title}</Heading>
    </Box>
  );
}

const GET_HOME_PAGE = gql`
  query GetHomePage {
    pageHome {
      title
    }
  }
`;

export async function getStaticProps() {
  const { data } = await client.query<GetHomePage>({
    query: GET_HOME_PAGE,
  });

  return {
    props: { pageHome: data.pageHome },
  };
}
