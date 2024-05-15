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
  },
};

export const resolvers = { queries, mutations, getInteractionsResolver };
