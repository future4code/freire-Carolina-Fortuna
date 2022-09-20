import { IdGenerator } from './../services/IdGenerator';
import { UserDatabase } from './../database/UserDatabase';
import { User } from "../models/User";
import { HashManager } from '../services/HashManager';
import { Authenticator } from '../services/Authenticator';
export class UserBusiness {

    async signUp( userDTO: any): Promise<string> {
        const {name, email, password, role} = userDTO

        if(!name || !email || !password || !role){
            throw new Error("Preencha todos os campos corretamente")
        }

        if (name.length < 3){
            throw new Error("O nome deve conter no mínimo 3 caracteres")
        }

        if (password.length < 6){
            throw new Error ("A senha deve conter no mínimo 6 caracteres")
        }

      const id = new IdGenerator().generate();

      const hashPassword = await new HashManager().hash(password)

      const user = new User( id, name, email, hashPassword, role)

      //const response = await userData.createUser(user)

        const token = new Authenticator().generateToken({ id, role })

        return token


    }
}