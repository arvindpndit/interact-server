import prisma from "../../db";

const mutations = {
  createInteraction: async (
    _: any,
    { content, authorId }: { content: string; authorId: number }
  ) => {
    //@ts-ignore
    return prisma.interaction.create({
      data: {
        content,
        authorId,
      },
    });
  },
};

export const resolvers = { mutations };
