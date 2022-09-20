import React from 'react'

//estilização
import { Card, VotesDiv, FlexDiv } from '../../components/PostCard/styles'

//imagens
import upVote from  '../../assets/upVote.png'
import downVote from  '../../assets/downVote.png'
import upVoteFill from '../../assets/upVoteFill.png'
import downVoteFill from '../../assets/downVoteFill.png'

//requisição axios
import { vote, deleteVote } from '../../services/votes'

 const CommentCard = (props) =>{

    const onClickUpVote = (id)=>{
        if(props.post.userVote === 1){
            deleteVote(id,'comments')
        }
        else{
            vote(id,'comments', 1)
        }
    }

    const onClickDownVote = (id)=>{
        if(props.post.userVote === -1){
            deleteVote(id,'comments')
        }
        else{
            vote(id,'comments', -1)
        }
    }

    return(
    <div>
      <Card key={props.comment.id}>
        <p>enviado por {props.comment.username} </p> 
        <h2>{props.comment.body}</h2>
       
        <FlexDiv>
            <VotesDiv>
                <img src={ (props.comment.length === 1)? upVoteFill : upVote}  
                onClick= {()=>onClickUpVote(props.comment.id)} alt="like" />
                <p>{props.comment.voteSum}</p>
                <img src={(props.comment.le === -1)? downVoteFill : downVote} 
                 onClick= {()=>onClickDownVote(props.comment.id)} alt="dislike" />
            </VotesDiv>

        </FlexDiv> 
    </Card>
  
    </div>
    )
} 

export default CommentCard