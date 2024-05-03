import { ApolloServer } from "@apollo/server";
import { User } from "./user";
import { Interaction } from "./interaction";

const typeDefs = `
  ${User.types}
  ${Interaction.types}

  type Query {
    ${User.queries}
  }

  type Mutation {
    ${User.mutations}
    ${Interaction.mutations}
  }
`;

const resolvers = {
  Query: {
    ...User.resolvers.queries,
  },
  Mutation: {
    ...User.resolvers.mutations,
    ...Interaction.resolvers.mutations,
  },
};

const graphqlServer = new ApolloServer<any>({
  typeDefs,
  resolvers,
});

export default graphqlServer;
