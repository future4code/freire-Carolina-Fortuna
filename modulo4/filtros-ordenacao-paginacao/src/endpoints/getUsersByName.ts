import { recipe } from '../types';
import { Request, Response } from "express"
import { connection } from "../data/connection"
import selectAllUsers from "./querrys"
import { user } from "../types"

export const getUsersByName = async(req: Request,res: Response): Promise<void> =>{
    try {


       const name = req.query.name
       

       if(name === ' '){
           throw new Error("Nome é obrigatório!")
       }
       
       const result = await connection("aula48_exercicio")
       .where("name", "like", `%${name}%`)

       console.log(name)

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