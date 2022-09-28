
export interface IPostDB {
    id: string,
    content: string,
    user_id: string,
    likes: number,
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


    // public setId = (newId: string) => {
    //     this.id = newId
    // }

    // public setName = (newName: string) => {
    //     this.name = newName
    // }

    // public setEmail = (newEmail: string) => {
    //     this.email = newEmail
    // }

    // public setPassword = (newPassword: string) => {
    //     this.password = newPassword
    // }

}

export interface ISignupInputDTO {
    name: string,
    email: string,
    password: string
}

export interface ILoginInputDTO {
    email: string,
    password: string
}

export interface IGetPostsInputDTO {
    token: string,
    search: string,
    order: string,
    sort: string,
    limit: string,
    page: string
}

export interface IGetPostsPost {
    id: string,
    name: string,
    email: string
}

export interface IGetPostsOutputDTO {
    posts: IGetPostsPost[]
}

export interface IDeleteUserInputDTO {
    token: string,
    idToDelete: string
}

export interface IGetPostsDBDTO {
    search: string,
    order: string,
    sort: string,
    limit: number,
    offset: number
}

export interface IEditUserInputDTO {
    token: string,
    idToEdit: string,
    name: string,
    email: string,
    password: string
}