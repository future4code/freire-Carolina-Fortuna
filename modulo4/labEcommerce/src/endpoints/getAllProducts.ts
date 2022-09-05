import { Request, Response } from "express"
import { off } from "node:process"
import connection from "../connection"
import { product } from "../types"


export default async function getAllProducts(
   req: Request,
   res: Response
): Promise<void> {

   try {
      //const { name, orderBy, orderType, page } = req.query

      //const resultsPerPage = 5

      // const offset = resultsPerPage * (Number(page) - 1)

      debugger

      const products: product[] = await connection("labecommerce_products")
         .select()

      res.send(products)
   } catch (error) {
      res.status(500).send("Unexpected server error")
   }
}