import React from 'react'
import { useNavigate } from 'react-router-dom'

//estilizações e componentes
import { Card, CommentsDiv, VotesDiv, FlexDiv } from './styles'

//rota
import { goToPostDetail } from '../../routes/coordinator'

//imagens
import upVote from  '../../assets/upVote.png'
import downVote from  '../../assets/downVote.png'
import comment from  '../../assets/comment.png'
import upVoteFill from '../../assets/upVoteFill.png'
import downVoteFill from '../../assets/downVoteFill.png'

//requisição axios
import { vote, deleteVote} from '../../services/votes'



 const PostCard = (props) =>{
    const navigate = useNavigate()
    
    const onClickComment =(id)=>{
        goToPostDetail(navigate, id)
    }

    const onClickUpVote = (id)=>{
        if(props.post.userVote === 1){
            deleteVote(id,'posts')
        }
        else{
            vote(id,'posts', 1)
        }
    }

    const onClickDownVote = (id)=>{
        if(props.post.userVote === -1){
            deleteVote(id,'posts')
        }
        else{
            vote(id,'posts', -1)
        }
    }
    return(
    <div>
      <Card key={props.post.id}>
        <p>enviado por {props.post.username} </p> 
        <h2>{props.post.body}</h2>
        
        <FlexDiv>
            <VotesDiv>
                <img src={ (props.post.userVote === 1)? upVoteFill : upVote}  
                onClick= {()=>onClickUpVote(props.post.id)} alt="like" />
                <p>{props.post.voteSum}</p>
                <img src={(props.post.userVote === -1)? downVoteFill : downVote}  
                onClick= {()=>onClickDownVote(props.post.id)} alt="dislike" />
            </VotesDiv>

            <CommentsDiv>
                <img src={comment} alt="comentário" onClick={()=>onClickComment(props.post.id)} />
                <p>{props.post.commentCount}</p>
            </CommentsDiv>
        </FlexDiv>
    </Card>
  
    </div>
    )
} 

export default PostCard