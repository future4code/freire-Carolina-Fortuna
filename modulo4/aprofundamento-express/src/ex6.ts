import express from "express";
import { Task, tasksList } from "./data";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());

app.put('/tasks/changeStatus/:id',(req,res) =>{
  let changedTask: Task[] = []
  //procura tarefa pelo id
     tasksList.filter((item)=>{
    if(item.id === Number(req.params.id)){
       //copia tarefa e muda o status 
      if(item.completed === false){
       
              changedTask = [{...item, completed:true}]
            }
      else{
        changedTask = [{...item, completed:false}]
      }
      //inserir tarefa mudada na lista
      //const newTaskList:Task[] = [...tasksList,(changedTask)]
    }
    return changedTask
})

//res.send( newTaskList )

    res.send( changedTask )

})



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;