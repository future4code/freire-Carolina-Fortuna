import { getUsersDTO, loginDTO, deleteDTO } from './../models/User';
import { Request, Response } from 'express';
import { UserBusiness } from './../business/UserBusiness';
import { userDTO } from '../models/User';

export class UserController {
 public signUp = async (req: Request, res:Response) => {
     try{
         const{ name, email, password, role } = req.body

         const userBusiness = new UserBusiness()

         const user:userDTO = {
             name,
             email,
             password,
             role
         }

         const response = await userBusiness.signUp(user)

         res.status(201).send(response)

     }catch(error:any){
        res.status(error.statusCode || 500).send({message: error.message})
     }
 }

 public login = async (req:Request, res: Response) => {
     try{
         const{email, password} = req.body

         const user:loginDTO= {
            email,
            password
        }

         const userBusiness = new UserBusiness ()

        const response = await userBusiness.login(user)

        res.status(200).send(response)

     }catch(error:any){
         res.status(400).send({ message: error.message})
    
     }
 }

 public getUsers = async (req: Request, res: Response) => {
     try{
        const users: getUsersDTO = {
            token: req.headers.authorization,
            search: req.query.search as string,
            order: req.query.order as string,
            sort: req.query.sort as string,
            limit: req.query.limit as string,
            page: req.query.page as string
        }

        const userBusiness = new UserBusiness()

        const response = await userBusiness.getUsers(users)

        res.status(200).send(response)

     }catch(error:any){
         res.status(error.statusCode || 500).send({message: error.message})
     }
 }

 public deleteUser = async (req:Request, res: Response) =>{
     try{

        const user: deleteDTO ={
            token: req.headers.authorization,
            idToDelete: req.params.id
        }

        const userBusiness = new UserBusiness()
        
        const response = await userBusiness.deleteUser(user)

        res.status(200).send(response)

     }catch(error:any){
         res.status(400).send({message:error.message})
     }
 }
}