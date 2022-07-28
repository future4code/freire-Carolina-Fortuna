import React, { useEffect, useState } from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import Header from '../../components/Header/Header'
import {getPosts} from '../../services/posts'
import {PostCard} from './PostCard'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import upVote from  '../../assets/upVote.png'
import downVote from  '../../assets/downVote.png'
import comment from  '../../assets/comment.png'
import WritePost from './WritePost'
import { goToPostDetail } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'


export const FeedPage = () =>{
    const navigate = useNavigate()
useProtectedPage()
const posts = useRequestData([], `${BASE_URL}/posts`)
console.log(posts)
// useEffect(()=>{
//     getPosts()
// },[])
const onClickComment =(id)=>{
goToPostDetail(navigate, id)


}
const postCards = posts.map((item)=>{
    return(
        <div key={item.id}>
        <p>enviado por {item.username} </p>
        <h1>{item.title}</h1>
        <p>{item.body}</p>
        
        <div>
            <div>
                <img src={upVote} alt="" />
                <p>{item.voteSum}</p>
                <img src={downVote} alt="" />
            </div>

            <div>
                <img src={comment} alt="" onClick={()=>onClickComment(item.id)} />
                <p>{item.commentCount}</p>
            </div>
        </div>
    </div>
    )
})

    return(
        <div>
        <Header/>
        <WritePost/>
        <p>Feed</p>
        {postCards}
        </div>
    )
} 

export default FeedPage