const { ApolloServer, gql } = require('apollo-server');
const {
  ApolloServerPluginLandingPageDisabled
} = require('apollo-server-core');

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass!!!',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    books: () => books,
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`);
});