
//hooks
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'

//componentes
import Header from '../../components/Header/Header'
import PostCard from '../../components/PostCard/PostCard'
import WritePost from './WritePost'

//constante
import { BASE_URL } from '../../constants/urls'


export const FeedPage = () =>{
  
useProtectedPage()

const posts = useRequestData([], `${BASE_URL}/posts`)

console.log(posts)

const postCards = posts.map((posts)=>{
    return(
      <PostCard post={posts}/>
    )
})

    return(
        <div>
            <Header/>
            <center>
                <WritePost/>
                {postCards}
            </center>
        </div>
    )
} 

export default FeedPage