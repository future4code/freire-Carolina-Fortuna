function checaRenovacaoRG(anoAtual:number, anoNascimento:number, anoCarteira:number):boolean {
 
    let idade = anoAtual - anoNascimento
    let idadeCarteira = anoAtual - anoCarteira
    let caso1 = (idade <= 20) && (idadeCarteira >= 5)
    let caso2 = ((idade > 20) && (idade <=50)) && (idadeCarteira >= 10)
    let caso3 = (idade > 50) && (idadeCarteira > 15)
    let renovacao = caso1 || caso2 || caso3
   return (renovacao)
   
   }

   console.log(checaRenovacaoRG(2022, 1993, 2011))