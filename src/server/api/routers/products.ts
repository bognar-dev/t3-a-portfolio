import { z } from "zod";
import { prisma } from "~/server/db";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { Cart } from "@prisma/client";

export const productsRouter = createTRPCRouter({
    getAll: publicProcedure.query(async (ctx) => {
        const products = await prisma.product.findMany();
        return products;
      }),
    getCart: publicProcedure.input(z.object({ user: z.string() }))
    .query(async (opts) => {
      const { input } = opts;

 // Query returns User or null
const cart: Cart | null = await prisma.cart.findUnique({
  where: {
    userId: input.user,
  },
  include:{
    CartItem: true,
  }
})

if(!cart){
  throw new TRPCError({
    code: "INTERNAL_SERVER_ERROR",
    message: `No Cart found`,
  });
}
const cartItems = await prisma.cartItem.findMany({
  where: {
    cartId: cart.id
  },
  include: {
    product: true,
  },
})

const cartPrice = await prisma.cartItem.aggregate({
  _sum: {
    product: {
      price: true,
    },
  },
  where: {
    cartId: cart.id
  },
  
});






return {
  cart,
  cartItems
};
    }),
});
