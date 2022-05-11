// Exercicios de interpretação
//Exercicio 1

const bool1 = true
const bool2 = false
const bool3 = !bool2 //true

let resultado = bool1 && bool2
console.log("a. ", resultado)

//a. false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)

//b. false

resultado = !resultado && (bool1 || bool2)
console.log("c. ", resultado)

//true && true == true
//c. true

console.log("d. ", typeof resultado)
// d. boolean

// Exercicio 2

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

//primeiro numero concatenado ao segundo 
 
//Exercicio 3

let soma2 = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma2)

//  Exercicios de escrita
//Ex 1

let idade = prompt("Qual a sua idade")
let idadeAmigo = prompt("Qual a idade do seu bff?")

let maiorIdade = Number(idade) > Number(idadeAmigo)
console.log("Sua idade é maior do que a do seu melhor amigo?", maiorIdade)

let dif = Number(idade) - Number(idadeAmigo)

console.log(dif)

//Ex. 2

let par = prompt("Insira um número par")

let resto = Number(par) % 2
console.log(resto)

//Todo numero par apresenta resto 0 ao ser dividido por 2
//Caso o numero seja impar o resto vai ser 1

//Ex 3.

let anos = prompt("Quantos anos voce tem?")

let meses = Number(anos)*12
console.log("Sua idade em meses é", meses)

let dias = meses * 30
console.log("Sua idade em dias é", dias)

let horas = dias * 24
console.log("Sua idade em horas é", horas)

//Ex 4

let num1 = prompt("Insira um numero:")

let num2 = prompt("Insira outro numero:")

num1 = Number(num1)
num2 = Number(num2)

let maior2 = num1 > num2
console.log("O primeiro numero é maior que segundo?", maior2)

let igual = num1 == num2
console.log("O primeiro numero é igual ao segundo?", igual)

let div12 = num1 / num2
let resto12 = div12 == 0
console.log("O primeiro numero é divisível pelo segundo?", resto12)

let div21 = num2/ num1
let resto21 = div21 == 0
console.log("O segundo numero é divisível pelo primeiro?", resto21)

//Desafio

let a = (77 - 32) * (5/9) + 273.15
console.log("77°F em Kelvin é ", a, "K" )

let b = 80 * (9/5) + 32
console.log( "80°C em Fahrenheit é", b, "°F")
 
//F
let c1 = 30 *(9/5) +32

//K
let c2 = (c1 - 32) * (5/9) + 273.15

console.log("30°C equivale a ", c1, "°F e ", c2, "K")

let celsius = prompt("Insira a temperatura em °C")

let fahrenheit = Number(celsius)  *(9/5) + 32
let kelvin = (fahrenheit - 32) * (5/9) + 273.15

console.log(celsius, "°C equivale a ", fahrenheit, "°F e ", kelvin, "K")

// 2

let kw = prompt("Insira o valor de kW")

kw = Number(kw)

const val = kw * 0.05
console.log("R$:" , val)

//14 reais para 280 kW

let desc = prompt("Insira o desconto")

let conta = ((100 -Number(desc))/100)*val

console.log("O valor da conta com desconto é R$", conta)
//11,90 reais com 15% de desconto





