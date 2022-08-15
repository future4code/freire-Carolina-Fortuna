
type Cliente = {
 cliente: string,
 saldoTotal:number, 
 debitos: number[]
}

const clientes:Cliente[] =
[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]


function filtraSaldoNegativo (clientes:Cliente[]):Cliente[]| void{
	let clientesNegativos: Cliente[] = []
	
 
	clientes.map((cliente)=>{

   let soma:number =  cliente.debitos.reduce((total:number, item:number) => total + item); 
 
  	let diferenca:number = cliente.saldoTotal - soma
	  if(diferenca < 0){
		clientesNegativos.push(cliente)
		
	  }
	  return (clientesNegativos)
  })
  
}


console.log(filtraSaldoNegativo(clientes))