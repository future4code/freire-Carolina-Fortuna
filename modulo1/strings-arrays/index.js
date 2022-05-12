
let array
console.log('a. ', array)
//a. udefined

array = null
console.log('b. ', array)
// b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//c. 11

let i = 0
console.log('d. ', array[i])
//d. 3

array[i + 1] = 19
console.log('e. ', array)
//e. 3 19 5 6 7 8 9 10 11 12 13

const valor = array[i + 6]
console.log('f. ', valor)
//f. 9

//Ex. 2

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//SUBI NUM ÔNIBUS EM MIRROCOS 28

//Exercícios de escrita
//1.

let nomeDoUsuario = prompt('Qual  o seu nome?')
let emailDoUsuario = prompt('Qual o seu e-mail')

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

//2.

let comida = ["chocolate", "sorvete", "hamburguer", "pizza", "sushi"]
console.log('a. ',comida)

console.log(comida[0])
console.log(comida[1])
console.log(comida[2])
console.log(comida[3])
console.log(comida[4])

let comidaDoUsuario = prompt('Qual a sua comida prferida?')


comida[1] = comidaDoUsuario

console.log(comida)



//3.

let listaDeTarefas = []

console.log('Diga três tarefas que você precisa fazer, uma de cada vez:')
listaDeTarefas[0] = prompt('Insira primeira tarefa:')
listaDeTarefas[1] = prompt('Insira seguda tarefa:')
listaDeTarefas[2] = prompt('Insira tercera tarefa:')

console.log(listaDeTarefas)

let tarefaFeita = prompt('Digite o índice da tarefa que você já realizou')

listaDeTarefas.splice(tarefaFeita, 1)
console.log(listaDeTarefas)

//Desafio
//1

let frase = prompt("Digite uma frase")

let lista = frase.split(" ")

console.log(lista)

//2

let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

let indice = frutas.indexOf("Abacaxi")

console.log( indice, frutas.length)