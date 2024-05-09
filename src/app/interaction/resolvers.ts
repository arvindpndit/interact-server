import { Interaction } from "@prisma/client";
import prisma from "../../db";

const queries = {
  interactions: async () => {
    return prisma.interaction.findMany();
  },
};

const mutations = {
  createInteraction: async (
    _: any,
    { content, authorId }: { content: string; authorId: string }
  ) => {
    return prisma.interaction.create({
      data: {
        content,
        authorId,
      },
    });
  },
};

const getUserResolver = {
  Interaction: {
    author: (parent: Interaction) => {
      return prisma.user.findUnique({
        where: {
          clerkId: parent.authorId,
        },
      });
    },
  },
};

export const resolvers = { queries, mutations, getUserResolver };
