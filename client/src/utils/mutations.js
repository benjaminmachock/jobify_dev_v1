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
