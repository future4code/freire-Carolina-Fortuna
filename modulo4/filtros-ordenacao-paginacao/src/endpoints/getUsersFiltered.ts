
import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"
import selectAllUsers from "./querrys"


export const getUsersFiltered = async(req: Request,res: Response): Promise<void> =>{
    try {

        let users: user[]
        let page = Number(req.query.page)
        let sort = req.query.sort
        const name = req.query.name
        const type = req.params.type

        if(name === ' '){
            return  users = await selectAllUsers()
        }

        if(page < 1 || isNaN(page)) {
           page = 1
        }
        
        if(sort !== 'name' && sort !== 'type') {
            sort = 'name'
         }

        const size = 5
  
        let offset = (page-1) * size
       
       
       const result = await connection("aula48_exercicio")
       .select()
       .where("name or type" , "like", `%${name}% OR ${type}`)
       .orderBy(sort, "asc")
       .limit(size)
      .offset(offset)
    
        users = result.map(toUser)

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