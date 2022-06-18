//Leitura
//1.
//imprime o numero 10

//2.a
//Vai imprimir todos numeros menores que 18

// 2.b
// Não, pois o for...of é utilizado para acessar os valores da lista 
// Para acessar o indice é necessário usar o for na sua forma tradicional

// 3.
// *
// **
// ***
// ****

//Escrita

//1

// let numeroPets = Number(prompt('Quantos bichinhos voce tem?'))
// let arrayPets = []
// if(numeroPets == 0){
//     console.log('Que pena! Você pode adotar um pet')
// }

// if(numeroPets>0){
//     for(let i =0; i< numeroPets; i++){
//     arrayPets[i] = prompt(`Qual o nome do seu ${i+1}º pet?`)
//     }
// console.log(arrayPets)
// }

//2.a

 const arrayOriginal = [1,2,3,4,5,6,7]

// for(let x of arrayOriginal){
//     console.log(x)
// }

// //2.b

// for(let x of arrayOriginal){
//     console.log(x/10)
// }

//2.c

// let arrayPares = []

// for(let x of arrayOriginal){
//    if(x%2 == 0){
//        arrayPares.push(x)
//    }
// }
// console.log(arrayPares)

// //2.d

// let arrayIndices = []
// for(let i=0; i< arrayOriginal.length; i++){
//     arrayIndices[i] = `O elemento do índex ${i} é: ${arrayOriginal[i]}`
// }

// console.log(arrayIndices)

//2.e

// let valorMax = 5
// let valorMin = 2

// for(let x of arrayOriginal){
//     if(x>valorMax){
//         valorMax = x
//     }
//     if(x<valorMin){
//         valorMin = x
//     }
// }

// console.log(`O valor máximo é ${valorMax} e o mínimo é ${valorMin}`)

//Desafio
console.log('Vamos jogar!!!')
//numCerto = Number(prompt('Jogador 1: Qual o número certo?'))
let numCerto = Math.floor((Math.random() * 100) + 1);
let numChutado = Number(prompt('Jogador 2: Chute um número'))
let i = 0


while(numChutado != numCerto){
    numChutado = Number(prompt('Chute outro numero'))
    console.log('O número chutado foi', numChutado)
    if(numChutado > numCerto){
        console.log('O numero certo é menor')
    }
    if(numChutado<numCerto){
        console.log('O numero certo  é maior')
    }
i++
}
if(numChutado == numCerto){
    console.log('ACERTOU!!!')
    console.log('O número certo é', numChutado)
}
console.log('O numero de tentativas foi:', i)

//Foi muito fácil, bastou substituir a variável numCerto 
//que era preenchida pelo ususário, pela função Math.random,
//que sorteia numeros, combinada com a função Math.floor, 
//que limita um intervalo para o sorteio