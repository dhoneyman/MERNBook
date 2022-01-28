import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      savedBooks
    }
  }
`;

createUser



loginUser

saveBook

deleteBook

searchGoogleBooks

export const QUERY_BOOKS = gql`
  query getBooks {
      books{
      authors
      description
      bookId 
      image
      link
      title}
`