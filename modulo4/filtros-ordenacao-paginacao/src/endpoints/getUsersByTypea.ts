
import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"

export const getUsersByTypea = async(req: Request,res: Response): Promise<void> =>{
    try {


       const type = req.params.type
       

       if(type === ' '){
           throw new Error("Tipo é obrigatório!")
       }
       
       const result = await connection("aula48_exercicio")
       .where("type", "like", `${type}`)

    
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