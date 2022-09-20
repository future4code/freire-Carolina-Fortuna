import { Request, Response } from 'express';
import { User } from '../models/User';
import { UserBusiness } from './../business/UserBusiness';


export class UserController {
 async signUp(req: Request, res:Response) {
     try{
         const{ name, email, password, role } = req.body

         const userBusiness = new UserBusiness()

         const user:any = {
             name,
             email,
             password,
            role
         }

         const token = await userBusiness.signUp(user)

         res.status(201).send({message: token})

     }catch(error:any){
        res.status(error.statusCode || 500).send({message: error.message})
     }
 }
}