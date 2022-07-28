
export const goToLogin = (navigate) =>{
 navigate('/')
}

export const goToSignUp = (navigate) =>{
    navigate('/signup')
   }


export const goToPostDetail = (navigate,id) =>{
 navigate(`/post/${id}`)
}

export const goFeed = (navigate) =>{
    navigate('/feed')
   }