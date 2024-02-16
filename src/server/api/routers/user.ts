import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const userRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.user.findMany();
  }),

  create: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        name: z.string().min(2),
        username: z.string().min(2),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.create({
        data: {
          name: input.name,
          email: input.email,
          username: input.username,
        },
      });
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        email: z.string().email(),
        name: z.string().min(2),
        username: z.string().min(2),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.update({
        where: { id: input.id },
        data: {
          name: input.name,
          email: input.email,
          username: input.username,
        },
      });
    }),

  delete: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.delete({ where: { id: input.id } });
    }),
});
