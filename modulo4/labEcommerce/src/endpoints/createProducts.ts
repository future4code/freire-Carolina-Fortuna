import { Request, Response } from "express"
import connection from "../connection"

export default async function createProducts(
   req: Request,
   res: Response
): Promise<void> {

   try {
      const { name, price, image_url } = req.body

      console.log(req.headers["content-type"])
      const id:string = Date.now().toString()
  
      await connection("labecommerce_products")
         .insert({id, name, price, image_url})

      res.status(201).end()
   } catch (error) {
      res.status(500).end()
   }
}

