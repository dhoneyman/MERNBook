import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
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
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($id: ID!) {
    saveBook(id: $ID) {
      authors
      description
      bookId
      image
      link
      title
    }
  }
`;

export const DELETE_BOOK = gql`
mutation deleteBook($bookId: ID!)
  deleteBook(bookId: $bookId)
`




