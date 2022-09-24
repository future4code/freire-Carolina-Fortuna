import { IGetPostsDBDTO, IPostDB, Post} from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostsDatabase extends BaseDatabase {
    public static Labook_Posts = "Arq_Posts"

    public findByEmail = async (email: string) => {
        const postsDB: IPostDB[] = await BaseDatabase
            .connection(PostsDatabase.Labook_Posts)
            .select()
            .where({ email })

        return postsDB[0]
    }

    public createPost = async (post: Post) => {
        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUser_id(),
            likes: post.getLikes()
        }

        await BaseDatabase
            .connection(PostsDatabase.Labook_Posts)
            .insert(postDB)
    }

    public getPosts = async (input: IGetPostsDBDTO) => {
        const search = input.search
        const order = input.order
        const sort = input.sort
        const limit = input.limit
        const offset = input.offset

        const postsDB: IPostDB[] = await BaseDatabase
            .connection(PostsDatabase.Labook_Posts)
            .select()
            .where("name", "LIKE", `%${search}%`)
            .orderBy(order, sort)
            .limit(limit)
            .offset(offset)
        
        return postsDB
    }

    public findById = async (id: string) => {
        const postsDB: IPostDB[] = await BaseDatabase
            .connection(PostsDatabase.Labook_Posts)
            .select()
            .where({ id })

        return postsDB[0]
    }

    public deletePost = async (id: string) => {
        await BaseDatabase
            .connection(PostsDatabase.Labook_Posts)
            .delete()
            .where({ id })
    }

    public editPost = async (post: Post) => {
        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUser_id(),
            likes: post.getLikes()
        }
        
        await BaseDatabase
            .connection(PostsDatabase.Labook_Posts)
            .update(postDB)
            .where({ id: postDB.id })
    }
}