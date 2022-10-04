import { ILikeDB, IPostDB, Post} from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostsDatabase extends BaseDatabase {
    public static TABLE_POST = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    private postModel = (post:Post):IPostDB =>{
        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUser_id()
        }

        return postDB
    } 

    public createPost = async (post: Post) => {
        const postDB = this.postModel(post)

        await BaseDatabase
        .connection(PostsDatabase.TABLE_POST)
        .insert(postDB)
    }

    public getPosts = async ()=>{
        const result = await BaseDatabase
        .connection(PostsDatabase.TABLE_POST)
        .select("*")

        return result
    }

    


    public getLikes = async (postId: string) => {
            const result: any = await BaseDatabase
                .connection(PostsDatabase.TABLE_LIKES)
                .select()
                .count("id AS likes")
                .where({ post_id: postId })

            return result[0].likes as number
    }

    public findPostById = async (postId: string) => {
            const postsDB: IPostDB[] = await BaseDatabase
                .connection(PostsDatabase.TABLE_POST)
                .select()
                .where({ id: postId })

            return postsDB[0]
    }

    public deletePost = async (postId: string) => {
            await BaseDatabase
                .connection(PostsDatabase.TABLE_POST)
                .delete()
                .where({ id: postId })
    }

    public findLike = async (postId: string, userId: string) => {
            const likesDB: ILikeDB[] = await BaseDatabase
                .connection(PostsDatabase.TABLE_LIKES)
                .select()
                .where({ post_id: postId })
                .andWhere({ user_id: userId })

            return likesDB[0]
    }

    public addLike = async (likeDB: ILikeDB) => {
            await BaseDatabase
                .connection(PostsDatabase.TABLE_LIKES)
                .insert(likeDB)
    }

    public removeLike = async (postId: string, userId: string) => {
            await BaseDatabase
                .connection(PostsDatabase.TABLE_LIKES)
                .delete()
                .where({ post_id: postId })
                .andWhere({ user_id: userId })
    }
 }