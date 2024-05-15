export const types = `#graphql
  type User {
    id: ID!
    username: String!
    email: String!
    clerkId: String!
    name: String
    picture: String
    interactions: [Interaction]
  }
`;
