import { z } from "zod";
import { prisma } from "~/server/db";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const productsRouter = createTRPCRouter({
    getAll: publicProcedure.query(async (ctx) => {
        const products = await prisma.product.findMany();
        return products;
      }),
});
