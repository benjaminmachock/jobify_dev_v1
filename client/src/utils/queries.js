import { gql } from "@apollo/client";

export const QUERY_JOBS = gql`
  query getJobs {
    jobs {
      _id
      title
      description
      pay
      category {
        name
        image
      }
    }
  }
`;
