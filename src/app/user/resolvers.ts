import prisma from "../../db";

const queries = {
  users: async () => {
    return prisma.user.findMany();
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
      picture: string;
      name: string;
    }
  ) => {
    return prisma.user.create({
      data: {
        username,
        email,
        clerkId,
        picture,
        name,
      },
    });
  },
};

export const resolvers = { queries, mutations };
