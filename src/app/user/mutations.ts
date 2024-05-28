export const mutations = `#graphql
    createUser(username: String!, email: String!, clerkId:String!, name:String, picture:String): User!
    followUser(followerId: String!, followeeId: String!): [FollowerFollowee]!
`;
