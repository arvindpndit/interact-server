import { ApolloServer } from "@apollo/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const typeDefs = `
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(username: String!, email: String!): User!
  }
`;

const resolvers = {
  Query: {
    users: async () => {
      return prisma.user.findMany();
    },
  },
  Mutation: {
    createUser: async (
      _: any,
      { username, email }: { username: string; email: string }
    ) => {
      return prisma.user.create({
        data: {
          username,
          email,
        },
      });
    },
  },
};

const graphqlServer = new ApolloServer<any>({
  typeDefs,
  resolvers,
});

export default graphqlServer;
