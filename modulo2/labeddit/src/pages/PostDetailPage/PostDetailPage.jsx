import React from "react";
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams, useNavigate } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import upVote from  '../../assets/upVote.png'
import downVote from  '../../assets/downVote.png'
import Header from "../../components/Header/Header";
import { WriteComment } from "./WriteComment";
import { Card, CommentsDiv, VotesDiv, FlexDiv } from '../../components/PostCard/styles'
import { vote} from "../../services/votes";
import comment from  '../../assets/comment.png'
import x from '../../assets/x.png'
import { goFeed } from "../../routes/coordinator";
import { Xbutton } from "./styles";

export const PostDetailPage = () => {
    const params = useParams()
    const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    const posts = useRequestData([], `${BASE_URL}/posts`)
    const navigate = useNavigate()
    useProtectedPage()

    const postCard = posts.map((item)=>{
       if( item.id == params.id){
        return(
          
           
            <Card key={item.id}>
            <p>enviado por {item.username} </p> 
            <h2>{item.body}</h2>
            
            <FlexDiv>
                <VotesDiv>
                    <img src={upVote}  alt="like" />
                    <p>{item.voteSum}</p>
                    <img src={downVote}   alt="dislike" />
                </VotesDiv>
    
                <CommentsDiv>
                    <img src={comment} alt="comentário"  />
                    <p>{item.commentCount}</p>
                </CommentsDiv>
            </FlexDiv>
        </Card>
       
        )
       }
    })

    const commentCards = comments.map((item)=>{
        return(
            <Card id={item.id}>
            <p>enviado por {item.username} </p>
         
            <h2>{item.body}</h2>
            
            <FlexDiv>
                <VotesDiv>
                    <img src={upVote} alt="like"  onClick= {()=>vote(item.id,'comment', 1)} />
                    <p>{item.voteSum}</p>
                    <img src={downVote} alt="dislike" onClick= {()=>vote(item.id,'comment',-1)}/>
                </VotesDiv>
            </FlexDiv>
        </Card>
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