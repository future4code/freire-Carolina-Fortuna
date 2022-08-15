import express from "express";

import { AddressInfo } from "net";

import {people, User, posts, Post} from './data'

const app = express();

app.use(express.json());


// ex1
// app.get("/", (req, res) => {          
//     res.send("Vini te amo")
// })

app.get('/users',(req, res)=>{
    const users: User[] = people.map(item =>{
        return item
    }) 

    res.status(200).send(users)
});

app.get('/posts', (req, res)=>{
    const blog: Post[] = posts.map(item=>{
        return item
    })
    res.status(200).send(blog)
})
//Eu tentei fazer com os posts como campo de User e tambem no seu array separado, e separado achei mais facil de utilizar

app.get('/posts/:id',(req,res)=>{
    const postUser = posts.map(item=>{
        if(item.userId === req.params.id){
            return item
        }
        else return undefined
    })

    res.status(200).send(postUser)
})




const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

