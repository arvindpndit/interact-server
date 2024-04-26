import { ApolloServer } from "@apollo/server";
import { PrismaClient } from "@prisma/client";
import { User } from "./user";

const prisma = new PrismaClient();

const typeDefs = `
  ${User.types}

  type Query {
    ${User.queries}
  }

  type Mutation {
    ${User.mutations}
  }
`;

const resolvers = {
  Query: {
    ...User.resolvers.queries,
  },
  Mutation: {
    ...User.resolvers.mutations,
  },
};

const graphqlServer = new ApolloServer<any>({
  typeDefs,
  resolvers,
});

export default graphqlServer;
