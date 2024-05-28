import prisma from "../../db";
import { User } from "@prisma/client";

const queries = {
  users: async () => {
    return prisma.user.findMany();
  },
  user: async (_: any, { clerkId }: { clerkId: string }) => {
    return prisma.user.findUnique({
      where: {
        clerkId: clerkId,
      },
    });
  },
};

const mutations = {
  createUser: async (
    _: any,
    {
      username,
      email,
      clerkId,
      name,
      picture,
    }: {
      username: string;
      email: string;
      clerkId: string;
      name: string;
      picture: string;
    }
  ) => {
    return prisma.user.create({
      data: {
        username,
        email,
        clerkId,
        name,
        picture,
      },
    });
  },
  followUser: async (
    _: any,
    {
      followerId,
      followeeId,
    }: {
      followerId: string;
      followeeId: string;
    }
  ) => {
    return prisma.follwerFollowee.create({
      data: {
        followeeId,
        followerId,
      },
    });
  },
};

const getInteractionsResolver = {
  User: {
    interactions: (parent: User) => {
      return prisma.interaction.findMany({
        where: {
          authorId: parent.clerkId,
        },
      });
    },

    following: async (parent: User) => {
      const following = await prisma.follwerFollowee.findMany({
        where: {
          followerId: parent.clerkId, // Use parent.id to reference the User ID
        },
        include: {
          followee: true,
        },
      });
      console.log(following);
      return following;
    },

    follower: async (parent: User) => {
      const follower = await prisma.follwerFollowee.findMany({
        where: {
          followeeId: parent.clerkId, // Use parent.id to reference the User ID
        },
        include: {
          follower: true,
        },
      });
      console.log(follower);
      return follower;
    },
  },
};

export const resolvers = { queries, mutations, getInteractionsResolver };
