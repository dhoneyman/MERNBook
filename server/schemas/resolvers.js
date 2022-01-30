const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        getUser: async (parent, args, context) => {
            if(context.user){
            return User.findOne({ _id: context.user._id })
            } else {
                throw new AuthenticationError('login first');
            }
        },

    },

    Mutations: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('No user found with this email address');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
          },
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
          },
        saveBook: async (parent, { bookData }) => {
            if (context.user) {
        
                const user = await User.findOneAndUpdate(
                  { _id: context.user._id },
                  { $addToSet: { savedBooks: book } }
                );
                return user;
              }
              else {
                throw new AuthenticationError('cant add book');
              }

        },
        deleteBook: async (parent, { bookId }, context) => {
            const user = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { savedBooks: { bookId } } }
                );

                return user;
        }
    }
}