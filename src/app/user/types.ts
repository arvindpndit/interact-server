export const types = `#graphql
  type User {
    id: ID!
    username: String!
    email: String!
    clerkId: String!
    name: String
    picture: String
    interactions: [Interaction]
    following:[FollowerFollowee]
    follower: [FollowerFollowee]
  },

  type FollowerFollowee {
  id: Int!
  followerId: String!
  followeeId: String!
  follower: User!
  followee: User!
}
`;
