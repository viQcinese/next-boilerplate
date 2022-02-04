import { gql } from "@apollo/client";

const typeDefs = gql`
  extend type Query {
    pageHome: PageHome!
  }

  type PageHome {
    title: String!
  }
`;

export default typeDefs;
