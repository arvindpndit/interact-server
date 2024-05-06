import prisma from "../../db";

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

export const resolvers = { mutations };
