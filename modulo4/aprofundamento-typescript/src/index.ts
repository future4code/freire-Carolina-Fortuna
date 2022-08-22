//ex1
//a

//const minhaString: string = 23

//Aparece um erro
//Type 'number' is not assignable to type 'string'.

//b

const meuNumero: number | string = 23

//utilizando union types com o símbolo do
//operador OR '|' entre os tipos

//c

type pessoa= {nome:string,idade:number,
corFavortita:string} 

// const pessoa1: pessoa = {
//     nome:'chiosdhs',
//     idade: 23,
//     corFavortita: 'amarelo'
// }

// const pessoa2: pessoa = {
//     nome:'ana',
//     idade:28,
//     corFavortita:'azul'
// }

// const pessoa3: pessoa ={
//     nome: 'lia',
//     idade: 34,
//     corFavortita:"vermelho'
// }

enum corFavortita {
    AMARELO = 'amarelo',
    AZUL= 'azul',
    ROXO='roxo',
    LARANJA = 'laranja',
    ANIL = 'anil',
    VERDE= 'verde',
    VERMELHO = 'vermelho'

}

const pessoa1: pessoa = {
    nome:'chiosdhs',
    idade: 23,
    corFavortita: corFavortita.AMARELO
}

const pessoa2: pessoa = {
    nome:'ana',
    idade:28,
    corFavortita: corFavortita.AZUL
}

const pessoa3: pessoa ={
    nome: 'lia',
    idade: 34,
    corFavortita: corFavortita.VERMELHO
}

