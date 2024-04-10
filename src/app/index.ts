import { ApolloServer } from "@apollo/server";

const typeDefs = `
  type Book {
    title: String
    author: String
    publishedDate: String
  }

  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => {
      // Logic to fetch books from a database or any other source
      return [
        { title: "Book 1", author: "Author 1", publishedDate: "2020-01-01" },
        { title: "Book 2", author: "Author 2", publishedDate: "2021-03-15" },
      ];
    },
  },
};

const graphqlServer = new ApolloServer<any>({
  typeDefs,
  resolvers,
});

export default graphqlServer;
