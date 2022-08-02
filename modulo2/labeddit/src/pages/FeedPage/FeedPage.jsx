
import useProtectedPage from '../../hooks/useProtectedPage'
import Header from '../../components/Header/Header'

import {PostCard} from './PostCard'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import upVote from  '../../assets/upVote.png'
import downVote from  '../../assets/downVote.png'
import comment from  '../../assets/comment.png'
import WritePost from './WritePost'
import { goToPostDetail } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import { Card, CommentsDiv, VotesDiv, FlexDiv } from './styles'
import { vote } from '../../services/votes'
import { style } from '@mui/system'


export const FeedPage = () =>{
    const navigate = useNavigate()
useProtectedPage()
const posts = useRequestData([], `${BASE_URL}/posts`)
console.log(posts)






const onClickComment =(id)=>{
goToPostDetail(navigate, id)


}
const postCards = posts.map((item)=>{
    return(
        <center>
        <Card key={item.id}>
        <p>enviado por {item.username} </p> 
        <h2>{item.body}</h2>
        
        <FlexDiv>
            <VotesDiv>
                <img src={upVote}  onClick= {()=>vote(item.id,'posts', 1)} alt="like" />
                <p>{item.voteSum}</p>
                <img src={downVote}  onClick= {()=>vote(item.id, 'posts', -1)} alt="dislike" />
            </VotesDiv>

            <CommentsDiv>
                <img src={comment} alt="comentário" onClick={()=>onClickComment(item.id)} />
                <p>{item.commentCount}</p>
            </CommentsDiv>
        </FlexDiv>
    </Card>
    </center>
    )
})

    return(
        <div>
        <Header/>
        <WritePost/>
    
        {postCards}
        </div>
    )
} 

export default FeedPage