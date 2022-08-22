import express from "express";
import { Task, tasksList } from "./data";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());

app.get('/tasks/user/:userId',(req,res) =>{

  //procura tarefa pelo id do usuário
    const taskByUser = tasksList.filter((item)=>{
        return item.userId === Number(req.params.userId)
    })

    res.send( taskByUser )

})



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;