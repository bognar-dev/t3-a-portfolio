import { z } from "zod";
import { prisma } from "~/server/db";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { Cart, CartItem } from "@prisma/client";
import { TRPCError } from "@trpc/server";

export const productsRouter = createTRPCRouter({
    getAll: publicProcedure.query(async () => {
        const products = await prisma.product.findMany();
        return products;
      }),
    addToCart:     
    publicProcedure.input(z.object({ productId: z.string() }))
    .query(async (opts) => {
      const { input } = opts;

      const cartItem: CartItem = await prisma.cartItem.create({
        data: {
          productId: input.productId,
          cartId: "clgtb6t840002vfygj8mqgolf"
        },
      });

      return cartItem;
    }),
    getCart:     
    publicProcedure.input(z.object({ user: z.string() }))
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



return {
  cart,
  cartItems
};
    }),
});
