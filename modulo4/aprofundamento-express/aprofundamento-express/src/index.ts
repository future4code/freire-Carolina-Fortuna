import express from 'express'
import cors from 'cors'

console.log(" Intro Api Express[Freire]")

// npm i express
// npm install @types/express --save-dev

// npm i cors
// npm i @types/cors --save -dev

const app= express()
app.use(express.json())
app.use(cors())


// app.get('/users', (req: Request,res: Response)=>{
//         res.send("Bateu no endpoit /users")  
// })

// app.get('/users', (req,res)=>{
//     if( req.headers.chave === "freire"){
//         res.send("Bateu no endpoint da Freire")
//     }else{
//         res.send("Valor não encontrado")
//     }
// })

// app.get('/users', (req,res)=>{

//     if(req.body.chave === "ChaveDoBody"){
//         res.status(201)
//         res.send(" Chegou com chave ++ ")
//     }else{
//         res.status(404)
//         res.send("Chegou sem chave --")
//     }

// })


app.get('/users', (req,res)=>{
    res.send(req.query.chave)
    res.end()
})

app.get('/users/:age', (req,res)=>{
    const age = Number(req.params.age)
       
    if(age % 2 ===0){
            res.status(200)
            res.send("Olha tua idade é par")
        }else{
            res.status(404)
            res.send("Sua idade é impar")
        }
})







app.listen(3003,()=>{
    console.log("Server rodando na porta 3003: [http://localhost:3003]")
})