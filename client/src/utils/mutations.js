import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $address: String!, $phoneNumber: String!) {
    addUser(username: $username, email: $email, password: $password, address: $address, phoneNumber: $phoneNumber) {
      token
      user {
        _id
        username
      }
    }
  }
`;

