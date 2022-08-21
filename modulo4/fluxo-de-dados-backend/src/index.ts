import express from "express";
import {Product, productList} from './data'
import { AddressInfo } from "net";
import { ifError } from "assert";

const app = express();

app.use(express.json());

//ex1

app.get("/test",(req,res) =>{
 
    res.send('Buonacera Katucha')
})

//ex3
app.post("/product/new",(req,res) =>{
  try {
    let name:string = req.body.name;
    const id = Date.now().toString();
    let price:number = req.body.price

    const newProduct : Product ={
      id: id,
      name: name,
      price: price
    }
      const newProductList:Product[] = [...productList,(newProduct)]
    
      res.send( newProductList )
    
  
 
    if(!name){
        throw new Error("Nome do produto não foi iformado")
    }
    if(!price){
        throw new Error("Preço do produto não foi informado")
    }

    if (!name || !price){
        throw new Error("Verifique os dados do produto")
    }

    if (typeof (name)!= "string"){
      throw new Error("Erro ao enviar nome do produto")
  }
  if (typeof (price)!= "number"){
    throw new Error("Erro ao enviar preço do produto")
  }
  
  if (price <= 0){
    throw new Error("O preço do produto deve ser maior que 0")
}
 
else {
  throw new Error("Erro ao criar novo produto")
}


} catch (error:any) {

  switch(error.message){

  
      case "Nome do produto não foi iformado":
      res.status(404).send(error.message)
      break

      case "Preço do produto não foi informado":
      res.status(404).send(error.message)
      break

      case "Verifique os dados do produto":
      res.status(422).send(error.message)
      break

      case "Erro ao enviar nome do produto":
      res.status(422).send(error.message)
      break
      
      case "Erro ao enviar preço do produto":
      res.status(422).send(error.message)
      break
      
      case "O preço do produto deve ser maior que 0":
      res.status(422).send(error.message)
      break

      default:
      res.status(500).send("Erro inesperado")
      break
  }
}

 
})

//ex4
app.get("/product/all",(req,res) =>{
 
  res.send(productList)
})

//ex5
app.put('/products/changePrice/:id',(req,res) =>{

try{
  //procura tarefa pelo id
  const newProductList:Product[] = productList.map((item)=>{
         
    if(item.id === (req.params.id)){
       //copia tarefa e muda o preço
              return  {...item, price:req.body.price}
            }
        if(!item){
          throw new Error("Produto não encontrado")
        }
      //inserir tarefa mudada na lista
      return item 
    })


    let price = req.body.price;

    res.status(200).send( newProductList)

  if(!price){
      throw new Error("Preço do produto não foi informado")
  }

  if (typeof (price)!= "number"){
    throw new Error("Erro ao enviar preço do produto")
  }

  if (price <= 0){
    throw new Error("O preço do produto deve ser maior que 0")
  }

  else {
  throw new Error("Erro ao criar novo produto")
  }



} catch (error:any) {

switch(error.message){
    
    case "Produto não encontrado":
    res.status(422).send(error.message)
    break
  
    case "Preço do produto não foi informado":
    res.status(404).send(error.message)
    break
   
    case "Erro ao enviar preço do produto":
    res.status(422).send(error.message)
    break
    
    case "O preço do produto deve ser maior que 0":
    res.status(422).send(error.message)
    break

    default:
    res.status(500).send("Erro inesperado")
    break
}
}



})

//ex6
app.delete('products/delete/:id',(req,res)=>{
  try{
    const newProductList:Product[] = productList.filter((item)=>{
    if(!item){
      throw new Error("Produto não encontrado")
    }
    
    return(item.id !== (req.params.id))
    })


    res.status(200).send( newProductList)

  }
  catch (error:any){
    if("Produto não encontrado"){
    res.status(422).send(error.message)
    }
    else{
    res.status(500).send("Erro inesperado")
    }

  }

})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;



