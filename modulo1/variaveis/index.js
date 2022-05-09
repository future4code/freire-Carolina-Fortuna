// Exercício 1
//tive que mudar as variáveis por conta do exercicio 2
let k = 10
let j = 10 

console.log(j)
// 10

j = 5
console.log(k, j)
// 10 5

// Exercício 2

let a = 10
let b = 20
c = a // c = 10
b = c // b = c = 10
a = b // a = b = c = 10

console.log(a, b, c)

// 10 10 10

//Exercicio 3

let horasTrab = prompt ("Quantas horas você trabalha por dia?")
let valorDia = prompt("Quanto você recebe por dia?")
alert(`Você recebe ${valorDia/horasTrab} por hora.`)

//O programa recebe do usuário os valores de horas trabalhadas por dia
// e de valor recebido no dia, a partir daí, calcula o valor reebido por hora
// e informa o usuário com um alerta

//Exercícios de Escrita 
//Exercício 1

let nome
let idade
 console.log( typeof nome, typeof idade)
// as variaveis estao como indefinidas pois nenhum valor foi 
//atribuido a elas

nome = prompt("Qual o seu nome")
idade = prompt("Qual a sua idade")
console.log( typeof nome, typeof idade)
// como as variaveis foram valoradas utilizando o comando
//prompt, a função typeof retorna o tipo string

console.log("Olá", nome, "você tem", idade, "anos.")

//Exercicio 2

roupaVerde = prompt("Vc está usando roupa verde hoje? Responda SIM ou Não")
tomouCafe = prompt("Voce tomou cafe hoje?  Responda SIM ou Não")
maiorDeIdade = prompt("Voce é maior de idade?  Responda SIM ou Não")

respVerde = roupaVerde
respCafe = tomouCafe
respIdade = maiorDeIdade

console.log("Vc está usando roupa verde hoje?", respVerde)
console.log("Voce tomou cafe hoje?", respCafe)
console.log("Voce é maior de idade?", respIdade)

//Exercicio 3
// vou ter que trocar os valores das variaveis, por que já tem a e b

let g = 10
let d = 25

let temp = 0

temp = g
g = d
d = temp

console.log ("O novo valor de g é", g)
console.log ("O novo valor de d é", d)

//Desafio

let e = prompt("Digite um número:") 
let f = prompt("Digite outro número:")

l = Number(e)
m = Number(f)

x = (l+m)
y = l * m

console.log("O primeiro número somado ao segundo número resulta em:", x)
console.log(" primeiro número multiplicado pelo segundo número resulta em", y)

console.log( typeof l, typeof m)

