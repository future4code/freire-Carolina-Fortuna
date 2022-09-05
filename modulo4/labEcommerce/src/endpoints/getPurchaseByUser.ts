import { Request, Response } from "express";
import connection from "../connection";
import { purchase } from "../types";

export default async function getPurchaseByUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { user_id } = req.params

      const purchases: purchase[] = await connection("labecommerce_purchases")
         .select()
         .where({ user_id })

         res.send(purchases)
      
   } catch (error) {
      res.status(500).end()
   }
}