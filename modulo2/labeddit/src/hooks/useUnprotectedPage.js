import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goFeed } from "../routes/coordinator";

const useUnprotectedPage = () =>{
    const navigate = useNavigate()

    useLayoutEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            goFeed(navigate)
        }
    }, [navigate]
    )
}

export default useUnprotectedPage