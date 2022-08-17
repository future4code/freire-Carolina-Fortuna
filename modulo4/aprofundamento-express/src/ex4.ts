import express from "express";
import { Task, tasksList } from "./data";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());

app.get("/tasks/completed", (req, res) => {          

    const completedTasks = tasksList.filter((item)=>{
        return item.completed === true 
    })
    
    res.status(200).send(completedTasks)
})



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;