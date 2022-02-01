import { gql } from '@apollo/client';

export const GET_USER = gql`
  query getUser($username: String!) {
    user(username: $username) {
      _id
      username
      email
      savedBooks
    }
  }
`;




export const GET_BOOKS = gql`
  query getBooks {
      books{
      authors
      description
      bookId 
      image
      link
      title
      }
`