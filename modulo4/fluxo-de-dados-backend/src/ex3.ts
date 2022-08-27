import express from "express";
import {Product, productList} from './data'
import { AddressInfo } from "net";

const app = express();

app.use(express.json());


app.post("/product/new",(req,res) =>{
 
    const newProduct : Product ={
        id: Date.now().toString(),
        name: req.body.name,
        price: req.body.price
   
    }

    const newProductList:Product[] = [...productList,(newProduct)]

    res.send( newProductList )

   
})


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;



