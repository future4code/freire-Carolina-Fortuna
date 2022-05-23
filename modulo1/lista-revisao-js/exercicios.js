// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    let tamanho = array.length
    return tamanho  
}


// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  let arrayReverso = array.reverse()
  return arrayReverso
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let ordem = array.sort(function(a, b){return a - b});
    return ordem
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    function testaPar(item){
        return item % 2 == 0
    }
    let pares = array.filter(testaPar)
  return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let pares = retornaNumerosPares(array)
    function aoQuadrado(item){
        return item * item
    }
    let quadrados = pares.map(aoQuadrado)
    return quadrados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return  Math.max(...array)
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior
    let menor
    if(num1 > num2){
        maior = num1
        menor = num2
    }
    else{
        maior = num2
        menor = num1
    }
    
    return { maiorNumero: maior, maiorDivisivelPorMenor: (maior % menor == 0), diferenca: maior - menor
    }
}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let array = []
    let num
    for(let i=0; i<n; i++){
        num = i * 2
        array.push(num)   
    }
    return array
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA == ladoB && ladoA == ladoC && ladoB == ladoC){
        return "Equilátero"
    }

    if((ladoA == ladoC || ladoA == ladoB || ladoB == ladoC) && (ladoA !=ladoB || ladoA != ladoC)){
        return "Isósceles"
    }

    if(ladoA != ladoB && ladoB != ladoC && ladoA != ladoC){
        return "Escaleno"
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let ordenado = retornaArrayOrdenado(array)
    return [ordenado[ordenado.length-2], ordenado[1]]
  
}


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   return  {...pessoa, nome: "ANÔNIMO"}
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const novoArray = pessoas.filter((item) => {
        return  ((item.idade > 14 && item.idade < 60) && (item.altura > 1.5))
    })

   return novoArray
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const novoArray = pessoas.filter((item) => {
        return  ((item.idade <= 14 || item.idade >= 60) || (item.altura <= 1.5))
    })

   return novoArray 
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}