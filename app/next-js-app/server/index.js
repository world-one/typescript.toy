const { ApolloServer, gql } = require('apollo-server');
const {
  ApolloServerPluginLandingPageDisabled
} = require('apollo-server-core');

const typeDefs = gql`
  type Mutation {
    addBook(title: String): Book
  }
  type Query {
    title: String
    books(title: String): [Book]
  }
  type Book {
    title: String
    author: String
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
    books: (title) => {
      console.log(title);
      return books.map((item) => {
        return item.title === title;
      })
      return books;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`);
});