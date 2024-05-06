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

export const resolvers = { queries, mutations };
