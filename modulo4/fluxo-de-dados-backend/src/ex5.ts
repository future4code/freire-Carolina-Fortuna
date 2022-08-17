import express from "express";
import {Product, productList} from './data'
import { AddressInfo } from "net";

const app = express();

app.use(express.json());

app.put('/products/changePrice/:id',(req,res) =>{


  //procura tarefa pelo id
  const newProductList:Product[] = productList.map((item)=>{
         
    if(item.id === (req.params.id)){
       //copia tarefa e muda o preço
              return  {...item, price:req.body.price}
            }
      //inserir tarefa mudada na lista
      return item 
    })


//res.send( newTaskList )

    res.send( newProductList)

})



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});; 