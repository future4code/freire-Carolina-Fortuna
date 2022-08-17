import express from "express";
import { Task, tasksList } from "./data";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());

app.post('/tasks',(req,res) =>{
   
   //variavel tipada do body
    const newTask: Task = {
    userId: req.body.userId,
    id: req.body.id,
    title: req.body.title,
    completed: req.body.completed
    }

    //copia da lista de tarefas para ser atualizada apos criação da nova tarefa
    const newTaskList:Task[] = [...tasksList,(newTask)]

    res.send( newTaskList )

})



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;