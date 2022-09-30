import { PostController } from './../src/controller/PostController';
import { IGetPostsInputDTO, Post, ICreatePostInputDTO } from './../src/models/Post';
import { PostBusiness } from "../src/business/PostBusiness";
import { AuthenticatorMock } from "./mocks/AuthenticatorMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { PostDatabaseMock } from "./mocks/PostDatabaseMock";
import exp from 'constants';



describe ('Testando post business', ()=>{
    const postBusiness = new PostBusiness(
    new PostDatabaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock()
    )

    test('Deve retornar lista de posts(getPosts)', async()=>{
        const input : IGetPostsInputDTO ={
            token: 'token-mock-normal'
        }

        const response = await postBusiness.getPosts(input)
        //testa utilizando o se o tipo retornado é instancia de post e se o array tem o tamanho do array do mock
        expect(response.posts[0]).toBeInstanceOf(Post)
        expect(response.posts.length).toBe(3)
    })

    test('criando post', async()=>{
        const input : ICreatePostInputDTO = {
            token: 'token-mock-normal',
            content: 'testando som 1234'
        }

        const response = await postBusiness.createPost(input)
        expect(response.message).toBe('Post criado com sucesso')
        expect(response.post).toBeInstanceOf(Post)
        expect(response.post.getId()).toBe('id-mock')
        expect(response.post.getContent()).toBe('testando som 1234')
        //e vai testando varias coisas de acordo com o que foi mockado 
        // e com o que o endpoint faz 
        
    })
})