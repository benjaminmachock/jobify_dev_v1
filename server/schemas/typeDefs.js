//custom GraphQL object types
import gql from "graphql-tag";

const typeDefs = gql`
  type Query {
    me: User
    job(_id: String!): Job
    jobs: [Job]
    user(_id: String!): User
    users: [User]
    category(_id: String!): Category
    categories: [Category]
    company(_id: String!): Company
    companies: [Company]
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addJob(title: String!, description: String!, pay: String!): Job
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
    updateCompany(
      _id: String!
      name: String!
      address: String!
      phone: String!
      owner: String!
    ): Company
    removeCompany(_id: String!): Company
  }

  type User {
    _id: ID!
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
    _id: ID!
    name: String
    image: String
  }

  type Company {
    _id: ID!
    name: String
    address: String
    phone: String
    owner: String
  }

  type Auth {
    token: String!
  }
`;

export default typeDefs;
