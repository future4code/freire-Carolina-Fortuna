
import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"


export const getUsersByOrder = 
async(req: Request,res: Response): Promise<void> =>{
    try {

        let sort = req.query.sort
     
     if(sort !== 'name' && sort !== 'type') {
        sort = 'email'
     }
    
       const result = await connection("aula48_exercicio")
       .select()
       .orderBy(sort, "asc")

     
       
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