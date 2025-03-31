import { gql } from "@apollo/client";

export const ADD_JOB = gql`
  mutation addJob($title: String!, $description: String!, $pay: String!) {
    addJob(title: $title, description: $description, pay: $pay) {
      _id
      title
      description
      pay
    }
  }

  mutation removeJob($_id: String!) {
    removeJob(_id: $_id) {
      _id
      title
      description
      pay
    }
  }
`;
