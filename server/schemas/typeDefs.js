const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    authors: [author]
    description: String
    bookId
    link
    title
    }
    
    type User {
      _id: ID
      username: String
      email: String
      savedBooks: [Book]
      bookCount: Int
      }

    type Auth {
      token: ID!
      user: User
    }

    input BookInput {
        authors: [author]
        description: String
        bookId
        link
        title
      }

      type Query {
        getUser: User
        }

      type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookData: BookInput): User
        deleteBook(bookId: ID!): User
        }
    }
    `