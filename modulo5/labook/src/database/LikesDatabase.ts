import {  IUserDB, User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class LikesDatabase extends BaseDatabase {
    public static Labook_Likes = "Arq_Likes"

    public findByEmail = async (email: string) => {
        const likesDB: IUserDB[] = await BaseDatabase
            .connection(LikesDatabase.Labook_Likes)
            .select()
            .where({ email })

        return likesDB[0]
    }

    public createUser = async (user: User) => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        await BaseDatabase
            .connection(LikesDatabase.Labook_Likes)
            .insert(userDB)
    }

    public getLikes = async (input: any) => {
        const search = input.search
        const order = input.order
        const sort = input.sort
        const limit = input.limit
        const offset = input.offset

        const likesDB: IUserDB[] = await BaseDatabase
            .connection(LikesDatabase.Labook_Likes)
            .select()
            .where("name", "LIKE", `%${search}%`)
            .orderBy(order, sort)
            .limit(limit)
            .offset(offset)
        
        return likesDB
    }

    public findById = async (id: string) => {
        const likesDB: IUserDB[] = await BaseDatabase
            .connection(LikesDatabase.Labook_Likes)
            .select()
            .where({ id })

        return likesDB[0]
    }

    public deleteUser = async (id: string) => {
        await BaseDatabase
            .connection(LikesDatabase.Labook_Likes)
            .delete()
            .where({ id })
    }

    public editUser = async (user: User) => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }
        
        await BaseDatabase
            .connection(LikesDatabase.Labook_Likes)
            .update(userDB)
            .where({ id: userDB.id })
    }
}