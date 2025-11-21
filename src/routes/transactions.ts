import { knex } from "../database";
import { z } from "zod"; 
import { FastifyInstance } from "fastify";

export async function transactionsRoutes(app: FastifyInstance) {
  app.post("/", async (request) => {
    // {title, amount, type: 'credit' | 'debit'}

    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(["credit", "debit"]),
    })

    const body = createTransactionBodySchema.parse(request.body);

    return transaction;
  });
}
