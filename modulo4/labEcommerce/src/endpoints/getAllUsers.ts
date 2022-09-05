import { Request, Response } from "express"
import { off } from "node:process"
import connection from "../connection"
import { user } from "../types"


export default async function getAllUsers(
   req: Request,
   res: Response
): Promise<void> {

   try {
      //const { name, orderBy, orderType, page } = req.query

      //const resultsPerPage = 5

      // const offset = resultsPerPage * (Number(page) - 1)

      debugger

      const users: user[] = await connection("labecommerce_users")
         .select()

      res.send(users)
   } catch (error) {
      res.status(500).send("Unexpected server error")
   }
}