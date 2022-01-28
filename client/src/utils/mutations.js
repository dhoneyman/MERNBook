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

export const ADD_BOOK = gql`
  mutation addBook($authors: String!, description: String!, title: String!) {
    addBook(authors: $authors, description: $String, title: $String) {
      authors
      description
      bookId
      image
      link
      title
    }
  }
`;


// post(createUser
    // post(login
        put(authMiddleware, saveBook)
        delete(authMiddleware, deleteBook);