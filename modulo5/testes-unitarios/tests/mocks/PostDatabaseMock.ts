import { ILikeDB, IPostDB, Post } from "../../src/models/Post"
import { BaseDatabase } from "../../src/database/BaseDatabase"

export class PostDatabaseMock extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    //Essa implementação é mantida para caso precise obter um IPostDB no teste
    public toPostDBModel = (post: Post): IPostDB => {
        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId()
        }

        return postDB
    }
    //No mock quando o for return uma void não precisa de implementação
    public createPost = async (post: Post): Promise<void> => {
        // const postDB = this.toPostDBModel(post)

        // await BaseDatabase
        //     .connection(PostDatabase.TABLE_POSTS)
        //     .insert(postDB)
    }

    //preciso que retorne uma lista de IPostsDB, não recebe nada
    public getPosts = async (): Promise <IPostDB[]> => {
        // const postsDB: IPostDB[] = await BaseDatabase
        //     .connection(PostDatabase.TABLE_POSTS)
        //     .select()

        // return postsDB

        const postsDB: IPostDB[] = [
        
            {
                id: "201",
                content: "Olá, sou novo por aqui!",
                user_id: "101"
            },
            {
                id: "202",
                content: "Bom dia, família!",
                user_id: "102"
            },
            {
                id: "203",
                content: "Receba!",
                user_id: "103"
            }
    ]

        return postsDB
    }

    //fazer uma logica que recebe o mesmo que a função origina recebe e retorna 
    //o mesmo tipo de dado, mas da maneira mais simples possivel e com valores fixos
    public getLikes = async (postId: string): Promise<number> => {
        // const result: any = await BaseDatabase
        //     .connection(PostDatabase.TABLE_LIKES)
        //     .select()
        //     .count("id AS likes")
        //     .where({ post_id: postId })

        // return result[0].likes as number
        //recebeu postId e retornou um number 
        if(postId == '201'){
            return 1
        }

        return 0
    }

    public findPostById = async (postId: string): Promise< IPostDB | undefined> => {
        // const postsDB: IPostDB[] = await BaseDatabase
        //     .connection(PostDatabase.TABLE_POSTS)
        //     .select()
        //     .where({ id: postId })

        // return postsDB[0]
        const post201 = {
            id: "201",
            content: "Olá, sou novo por aqui!",
            user_id: "101"
        }

        if(postId == '201'){
            return post201
        }

        return undefined 
    }

    //promise void sem implementaçao
    public deletePost = async (postId: string): Promise<void> => {
        // await BaseDatabase
        //     .connection(PostDatabase.TABLE_POSTS)
        //     .delete()
        //     .where({ id: postId })
    }

    public findLike = async (postId: string, userId: string): Promise<ILikeDB | undefined> => {
        //const likesDB: ILikeDB[] = await BaseDatabase
        //     .connection(PostDatabase.TABLE_LIKES)
        //     .select()
        //     .where({ post_id: postId })
        //     .andWhere({ user_id: userId })

        // return likesDB[0]

        if(postId == '201' && userId == 'id-mock'){
            return   {
                id: "301",
                post_id: "201",
                user_id: "101"
            }
        }
    }

    public addLike = async (likeDB: ILikeDB): Promise<void> => {
        // await BaseDatabase
        //     .connection(PostDatabase.TABLE_LIKES)
        //     .insert(likeDB)
    }

    public removeLike = async (postId: string, userId: string): Promise<void> => {
    //     await BaseDatabase
    //         .connection(PostDatabase.TABLE_LIKES)
    //         .delete()
    //         .where({ post_id: postId })
    //         .andWhere({ user_id: userId })
     }
}