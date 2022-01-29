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


router.route('/').put(authMiddleware, saveBook)
router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/books/:bookId').delete(authMiddleware, deleteBook);