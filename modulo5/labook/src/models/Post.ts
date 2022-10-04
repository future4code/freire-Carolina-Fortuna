
export interface IPostDB {
    id: string,
    content: string,
    user_id: string,
}


export class Post {
    constructor(
        private id: string,
        private content: string,
        private user_id: string,
        private likes: number
    ) {}

    public getId = () => {
        return this.id
    }

    public getContent = () => {
        return this.content
    }

    public getUser_id = () => {
        return this.user_id
    }

    public getLikes = () => {
        return this.likes
    }


    public setId = (newId: string) => {
        this.id = newId
    }

    public setContent = (newContent: string) => {
        this.content = newContent
    }

    public setUserId = (newUserId: string) => {
        this.user_id = newUserId
    }

    public setLikes = (newLikes: number) => {
        this.likes = newLikes
    }

}

export interface ILikeDB {
    id: string,
    post_id: string,
    user_id: string
}

export interface ICreatePostInputDTO {
    token: string,
    content: string
}

export interface ICreatePostOutputDTO {
    message: string,
    post: Post
}

export interface IGetPostsInputDTO {
    token: string,
    search: string,
    order: string,
    sort: string,
    limit: string,
    page: string
}

export interface IGetPostsOutputDTO {
    posts: Post[]
}

export interface IDeletePostInputDTO {
    token: string,
    postId: string
}

export interface IDeletePostOutputDTO {
    message: string
}

export interface IAddLikeInputDTO {
    token: string,
    postId: string
}

export interface IAddLikeOutputDTO {
    message: string
}

export interface IRemoveLikeInputDTO {
    token: string,
    postId: string
}

export interface IRemoveLikeOutputDTO {
    message: string
}