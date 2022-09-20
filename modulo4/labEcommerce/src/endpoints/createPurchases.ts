import { Request, Response } from "express"
import connection from "../connection"

export default async function createPurchases(
   req: Request,
   res: Response
): Promise<void> {
  
   try {
      const {  user_id, product_id, quantity } = req.body

      console.log(req.headers["content-type"])
      const id:string = Date.now().toString()
      const total_price = 20
  
      await connection("labecommerce_purchases")
         .insert({id,user_id, product_id, quantity, total_price})

      res.status(201).end()
   } catch (error) {
      res.status(500).end()
   }
}

