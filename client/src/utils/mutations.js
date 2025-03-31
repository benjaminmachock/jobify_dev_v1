import { gql } from "@apollo/client";

export const ADD_JOB = gql`
  mutation addJob($title: String!, $description: String!, $pay: String!) {
    addJob(title: $title, description: $description, pay: $pay) {
      title
      description
      pay
    }
  }
`;
export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;
