import express, { application } from "express";
import cors from "cors";

type Extrato={
    valor: number,
    data: string,
    descriçao: string
}

type Conta ={
    nome: string,
    cpf: number,
    dataNasc: string,
    saldo: number,
    extrato: Extrato[]
}

const contas: Conta[] = []

const app = express();

app.use(express.json());
app.use(cors());

//criar nova conta
app.post('/conta', (req, res)=>{
    let errorCode: number = 400;
    try{

        const {nome, cpf, dataNasc, saldo, extrato} = req.body;

        if (!nome|| !cpf|| !dataNasc|| !saldo|| !extrato){
            errorCode = 422;
            throw new Error ("Por favor confira os dados")
        }

        //if(dataNasc)

        const novaConta:Conta = {
            nome,
            cpf,
            dataNasc,
            saldo: 0,
            extrato
        }

        contas.push(novaConta)
        res.status(201).send({message:"Conta criada com sucesso!"})

    }catch (error:any){
        res.status(errorCode).send({ messagem: error.message });
    }
})

//Pegar o saldo de uma conta

app.get('/conta/saldo',(req,res)=>{
    let errorCode = 400

    try{
        const nome: string = req.query.nome as string;
        const cpf:number = Number(req.query.cpf);

        const conta: Conta | undefined = contas.find((item) => item.nome === nome && item.cpf === cpf) ;
        if (!conta) {
          errorCode = 404;
          throw new Error("Conta não encontrada");
        }
        res.status(200).send(conta);
    }catch (error: any) {
        res.status(errorCode).send({ message: error.message });
    }   
   
})

//adicionar saldo

app.patch('/conta/saldo', (req, res)=>{
    let errorCode = 400
    try{
        const nome: string = req.query.nome as string;
        const cpf:number = Number(req.query.cpf);
        const saldo: number = Number(req.query.saldo) 

        const conta: Conta | undefined = contas.find((item) => item.nome === nome && item.cpf === cpf) ;
        if (!conta) {
          errorCode = 404;
          throw new Error("Conta não encontrada");
        }

        const saldoAtualizado:Conta={
            ... conta, saldo: conta.saldo + saldo
        }

        if(!saldoAtualizado){
            throw new Error ("Erro ao atualizar saldo")
        }

        const contasAtualizadas : Conta[] = [... contas, saldoAtualizado]
        res.status(200).send(contasAtualizadas);

    }catch (error: any) {
        res.status(errorCode).send({ message: error.message });
    }   
})

//Pagar conta

app.patch('/conta/pagamento', (req, res)=>{
    let errorCode = 400

    try{
        const nome: string = req.query.nome as string;
        const cpf:number = Number(req.query.cpf);
        const valor: number = Number(req.query.valor);
        const data : string | undefined= req.query.data as string
        const descriçao: string = req.query.descriçao as string

        // if(data === undefined){
        //     data = Date()
        // }
        const conta: Conta | undefined = contas.find((item) => item.nome === nome && item.cpf === cpf) ;
        if (!conta) {
          errorCode = 404;
          throw new Error("Conta não encontrada");
        }
        //if data atual > data de pagamento => erro
        const transaçao: Extrato = {
            valor,
            data,
            descriçao
        }
        if(!transaçao){
            throw new Error("Erro ao processar pagamento")
        }
        //inserindo a transação no array de extrato
        conta.extrato.push(transaçao)
        // atualizando o saldo 
        if(conta.saldo < valor){
            throw new Error("Saldo insuficiente")
        }

        const saldoAtualizado:Conta={
            ... conta, saldo: conta.saldo - valor
        }

        if(!saldoAtualizado){
            throw new Error ("Erro ao atualizar saldo")
        }

        //atualizando array de contas
        const contasAtualizadas : Conta[] = [... contas, saldoAtualizado]
        
        res.status(200).send(contasAtualizadas); 

    }catch (error: any) {
        res.status(errorCode).send({ message: error.message });
    }   
})

//Transferência Interna
//seu nome, o seu CPF, o nome do destinatário, o CPF do destinatário e o valor em si. 


app.patch('conta/transferencia',(req,res)=>{

let errorCode = 400
    try{
        const nomePagador: string = req.query.nomePagador as string;
        const cpfPagador:number = Number(req.query.cpfPagador);
        const valorTransferido: number = Number(req.query.valorTransferido) 
        const nomeDestinatario: string = req.query.nomeDestinatario as string
        const cpfDestinatario: number = Number(req.query.cpfDestinatario)

        //procurar conta do pagador
        const contaPagador: Conta | undefined = contas.find((item) => item.nome === nomePagador && item.cpf === cpfPagador) ;
        if (!contaPagador) {
          errorCode = 404;
          throw new Error("Sua conta não foi encontrada");
        }

          //procurar conta do destinatario
          const contaDestinatario: Conta | undefined = contas.find((item) => item.nome === nomeDestinatario && 
          item.cpf === cpfDestinatario) ;
          if (!contaDestinatario) {
            errorCode = 404;
            throw new Error("Conta do destinatário não foi encontrada");
          }
  
        //Descontar valor do saldo do pagador 
        const saldoAtualPag:Conta={
            ... contaPagador, saldo: contaPagador.saldo - valorTransferido
        }
        if(!saldoAtualPag){
            throw new Error ("Erro ao atualizar seu saldo")
        }

        //Adicionar valor ao saldo do destinatário
        const saldoAtualDes:Conta={
            ... contaDestinatario, saldo: contaDestinatario.saldo + valorTransferido
        }
        if(!saldoAtualDes){
            throw new Error ("Erro ao atualizar saldo do destinatário")
        }
       
        //atualizando contas
        const contasAtualizadas : Conta[] = [... contas, saldoAtualDes, saldoAtualDes]
        
        //precisa remover as contas antes de serem atualizadas?
        res.status(200).send(contasAtualizadas);

    }catch (error: any) {
        res.status(errorCode).send({ message: error.message });
    }   
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});