
import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"


export const getUsersLimit = async(req: Request,res: Response): Promise<void> =>{
    try {


        let page = Number(req.query.page)

        if(page < 1 || isNaN(page)) {
           page = 1
        }
  
        const size = 5
  
        let offset = (page-1) * size
       
       
       const result = await connection("aula48_exercicio")
       .select()
       .limit(size)
      .offset(offset)
    
       const users = result.map(toUser)

       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
        res.status(500).send({
            message: error || "Aconteceu algo inesperado"
         })
    }
    
        }

    const toUser = (input: any): user => {
        return {
        id: input.id,
        name: input.name,
        email: input.email,
        type: input.type
        }
    }