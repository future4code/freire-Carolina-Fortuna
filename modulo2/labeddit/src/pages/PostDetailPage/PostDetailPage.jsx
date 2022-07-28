import React from "react";
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import upVote from  '../../assets/upVote.png'
import downVote from  '../../assets/downVote.png'
import Header from "../../components/Header/Header";
import { WriteComment } from "./WriteComment";

export const PostDetailPage = () => {
    const params = useParams()
    const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
   



    // console.log(comments)
    useProtectedPage()

    const commentCards = comments.map((item)=>{
        return(
            <div key={item.id}>
            <p>enviado por {item.username} </p>
         
            <p>{item.body}</p>
            
            <div>
                <div>
                    <img src={upVote} alt="" />
                    <p>{item.voteSum}</p>
                    <img src={downVote} alt="" />
                </div>
            </div>
        </div>
        )
    })
    
    return(
        <div>
            <Header/>
            <WriteComment id= {params.id}/>
            {commentCards}
        </div>
    )
}

export default PostDetailPage