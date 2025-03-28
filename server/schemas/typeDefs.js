//custom GraphQL object types
import gql from "graphql-tag";

const typeDefs = gql`
  type Query {
    jobs: [Job]
    users: [User]
    categories: [Category]
    companies: [Company]
  }

  type Mutation {
    createJob(title: String!, description: String!, pay: String!): Job
    removeJob(_id: String!): Job
    updateJob(
      _id: String!
      title: String!
      description: String!
      pay: String!
    ): Job
    createCompany(
      name: String!
      address: String!
      phone: String!
      owner: String!
    ): Company
    removeCompany(_id: String!): Company
  }

  type User {
    username: String
    email: String
    password: String
    role: String
    favoriteJobs: [Job]
  }

  type Job {
    _id: ID!
    title: String
    description: String
    pay: String
    category: Category
    company: Company
  }

  type Category {
    name: String
  }

  type Company {
    name: String
    address: String
    phone: String
    owner: String
  }
`;

export default typeDefs;
