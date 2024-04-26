import prisma from "../../db";

const queries = {
  users: async () => {
    return prisma.user.findMany();
  },
};

const mutations = {
  createUser: async (
    _: any,
    { username, email }: { username: string; email: string }
  ) => {
    return prisma.user.create({
      data: {
        username,
        email,
      },
    });
  },
};

export const resolvers = { queries, mutations };
