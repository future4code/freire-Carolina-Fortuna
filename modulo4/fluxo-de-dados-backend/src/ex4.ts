import express from "express";
import {Product, productList} from './data'
import { AddressInfo } from "net";

const app = express();

app.use(express.json());


app.get("/product/all",(req,res) =>{
 
    res.send(productList)
})


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;



