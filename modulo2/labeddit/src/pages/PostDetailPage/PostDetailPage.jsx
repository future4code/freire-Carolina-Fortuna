import React from "react";
import { useParams, useNavigate } from "react-router-dom";

//hooks
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from "../../hooks/useRequestData";

//constante
import { BASE_URL } from "../../constants/urls";

//componentes
import Header from "../../components/Header/Header";
import WriteComment  from "./WriteComment";
import PostCard from '../../components/PostCard/PostCard'
import CommentCard from "./CommentCard";

//botão 'X' para voltar ao feed
import x from '../../assets/x.png'
import { goFeed } from "../../routes/coordinator";
import { Xbutton } from "./styles";


export const PostDetailPage = () => {
    
    useProtectedPage()
   
    const params = useParams()
   
    const navigate = useNavigate()
   
    const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
   
    const posts = useRequestData([], `${BASE_URL}/posts`)
    
 
    const postCard = posts.map((posts)=>{
       if( posts.id === params.id){
        return(
            <PostCard post={posts}/>
        )}
    })

    const commentCards = comments.map((comments)=>{
        return(
           <CommentCard comment = {comments}/>
        )
    })
    
    return(
        <div>
            <Header/>
            <Xbutton src={x} onClick={()=>goFeed(navigate)}/>
            <center>
            {postCard}
            <WriteComment id= {params.id}/>
            {commentCards}
            </center>
        </div>
    )
}

export default PostDetailPage