//custom GraphQL object types
import gql from "graphql-tag";

const typeDefs = gql`
  type Query {
    jobs: [Job]
  }

  type Job {
    title: String
    description: String
    pay: String
  }
`;

export default typeDefs;
