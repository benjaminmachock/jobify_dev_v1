import { gql } from "@apollo/client";

export const REMOVE_JOB = gql`
  mutation removeJob($_id: String!) {
    removeJob(_id: $_id) {
      _id
      title
      description
      pay
    }
  }
`;
