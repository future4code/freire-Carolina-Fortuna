import { Authenticator } from './../services/Authenticator';
import { tokenPayload, userDTO, singupDTO } from './../models/User';
import { IdGenerator } from './../services/IdGenerator';
import { UserDatabase } from './../database/UserDatabase';
import { User, USER_ROLES } from "../models/User";
import { HashManager } from '../services/HashManager';


export class UserBusiness {

    async signUp( userDTO: userDTO): Promise<singupDTO> {
        const {name, email, password, role} = userDTO

        if(!name || !email || !password || !role){
            throw new Error("Preencha todos os campos corretamente")
        }

    

        if(typeof name !== 'string'){
            throw new Error ('O nome deve ser uma string')
        }

        if(typeof password !== 'string'){
            throw new Error ('A senha deve ser do tipo string')
        }

        if (name.length < 3){
            throw new Error("O nome deve conter no mínimo 3 caracteres")
        }

        if (password.length < 6){
            throw new Error ("A senha deve conter no mínimo 6 caracteres")
        }

        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error("Parâmetro 'email' inválido")
        }

      const userDatabase = new UserDatabase

      const userDB = await userDatabase.findByEmail(email)

      if (userDB){
          throw new Error ("E-mail já cadastrado")
      }
      const id = new IdGenerator().generate();

      const hashPassword = await new HashManager().hash(password)

      const user = new User( id, name, email, hashPassword, USER_ROLES.NORMAL)

      await userDatabase.createUser(user)

     const payload : tokenPayload = {
         id: user.getId(),
         role: user.getRole()
     }

     const authenticator = new Authenticator()
     const token = authenticator.generateToken(payload)

    const response : singupDTO = {
        message: 'Cadastro realizado com sucesso',
        token
    } 

    return response
    }
}