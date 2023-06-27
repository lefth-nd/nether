import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

//const randomNum = Math.floor(Math.random() * 1) + 1;
const randomNum = 6;
export const foodRouter = createTRPCRouter({
  food: publicProcedure.query(({ ctx }) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    return ctx.prisma.foods.findFirst({ where: { index: randomNum } });
  }),
});
