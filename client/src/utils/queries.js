import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_PIZZAS = gql`
  query pizzas {
    pizza {
      description
      name
      price
    }
  }
`;

