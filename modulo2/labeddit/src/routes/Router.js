import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import FeedPage from '../pages/FeedPage/FeedPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PostDetailPage from '../pages/PostDetailPage/PostDetailPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'

const Router = () =>{

return(
    <BrowserRouter>

        <Routes>

            <Route path='/' element={<LoginPage />} />
            <Route path='/feed' element={<FeedPage/>} />
            <Route path='/post/:id' element={<PostDetailPage/>} />
            <Route path='/signup' element={<SignUpPage/>} />
        </Routes>

    </BrowserRouter>
    )
}

export default Router