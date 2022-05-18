//Exercicios leitura
//1.a
//O codigo testa se o numero possui resto igual a o na divisao por 2

//1.b
//Numeros pares.

//1.c
//Numeros impares

//2.a
//Para informar o preço da fruta escolhida pelo usuario

//2.b
//O preço da fruta maçã é R$2.25

//2.c
//O preço da fruta Pêra é R$ 5

//3.a
// Declarando a variavel numero e atribuindo o valor 
//designado pelo usuario, além disso converte para o tipo number

//3.b
// Deveria dar(para 10)
//Esse número passou no teste
//Essa mensagem é secreta
//e (para -10)
//Essa mensagem é secreta

//3.c
//Porém deu mensagem de erro, pois a variavel mensagem foi definida
//dentro do bloco do if, e mencionada fora do bloco. Nesse caso a leitura nao fois possivel
//A solução era colocar console.log(mensagem) dentro do bloco
//ou declarar mensagem fora do bloco. 


//Escrita
//1

// let idade = Number(prompt('Qual a sua idade?'))

// if (idade >= 18){
//     console.log('Você pode dirigir')
// }

// else {
//     console.log('Você não pode dirigir.')
// }

//2

//let turno = prompt('Qual turno você estuda? M/V/N')

// if(turno == 'M'){
//     console.log('Bom dia!')
// }
// if(turno == 'V'){
//     console.log('Boa tarde!')
// }
// if(turno == 'N'){
//     console.log('Boa noite!')
// }

//3.
// switch(turno){
//     case 'M':
//         console.log('Bom dia!')
//         break;
//     case 'V':
//         console.log('Boa tarde!')
//         break;
//     case 'N':
//         console.log('Boa noite!')
//         break;

// }

//4.

//  let generoFilme = prompt('Qual genero do filme?')
//  let valorIngresso = Number(prompt('Qual o valor do ingresso?'))

//  if(generoFilme == 'fantasia' && valorIngresso < 15){
//     console.log('Bom filme!')
//     let lanche = prompt('Qual lanche voce vai comprar?')
//     console.log(`Aproveite seu/sua ${lanche}`)
// }

//  else{
//   console.log('Escolha outro filme')
//  }

//Desafio

//2.

let nome = prompt('Qual o seu nome?')
let tipoJogo = prompt('Digite IN para internacional e DO, para domestico')
let etapaJogo = prompt('Digite SF para semi-final, DT para decisão terceiro lugar ou FI para final:')
let categoria = prompt('Digite o número da categoria')
let quantidadeIngresso = Number(prompt('Qual a quantidade de ingressos?'))
let valorIngresso 
if (etapaJogo == 'SF'){
    if(categoria == 1){
        valorIngresso = 1320
    }
    
    if(categoria == 2){
        valorIngresso = 880
    }

    if(categoria == 3){
        valorIngresso = 550
    }
    if(categoria == 4){
        valorIngresso = 220
    }
}

if(etapaJogo == 'DT'){
    if(categoria == 1){
        valorIngresso = 660
    }
    
    if(categoria == 2){
        valorIngresso = 440
    }

    if(categoria == 3){
        valorIngresso = 330
    }
    if(categoria == 4){
        valorIngresso = 170
    } 
}

if(etapaJogo == 'FI'){
    if(categoria == 1){
        valorIngresso = 1980
    }
    
    if(categoria == 2){
        valorIngresso = 1320
    }

    if(categoria == 3){
        valorIngresso = 880
    }
    if(categoria == 4){
        valorIngresso = 330
    } 
}


if(tipoJogo == 'IN') {
    valorIngresso *= 4.1
}

else{
    valorIngresso = valorIngresso
}

let totalIngresso = valorIngresso * quantidadeIngresso

console.log(' ---Dados de compra---')
console.log(' Nome do Cliente:', nome)
console.log('Tipo de jogo', tipoJogo)
console.log('Etapa do jogo', etapaJogo)
console.log('Categoria:', categoria)
console.log('Quantidade de Ingressos:', quantidadeIngresso, 'ingressos')
console.log('--Valores---')
console.log('Valor do ingresso: R$', valorIngresso.toFixed(2))
console.log('Valor total: R$',totalIngresso.toFixed(2))