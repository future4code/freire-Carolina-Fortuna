//Interpretação
//1.

function minhaFuncao(variavel) {
    return variavel * 5
}
console.log(minhaFuncao(2))
//10

console.log(minhaFuncao(10))
//50

//nao apareceria nada, pois não foi utlizado console.log dentro da funçaõ
//apenas a variavel teria seu valor alterado sem imprimir no console

//2.

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
    return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//a. A função transforma o texto em letras minusculas 
//e procura pela palavra 'cenoura', retornando true se 
// encontrar e false caso não encontre

//b. 
//i. true
//ii. true
//iii.true



// Escrita
//1.
//a.

function informacoesA (){
   return console.log('Eu sou Carolina, tenho 28 anos, moro em Porto Alegre e sou estudante')
}

informacoesA();
//b.
function informacoesB (a,b,c,d){
  
    return console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
}

let nome = prompt('Nome')
let idade = Number(prompt('idade'))
let cidade = prompt('cidade')
let profissao = prompt('profissão')

informacoesB(nome, idade,cidade, profissao)


//2.
//a.

function soma (e,f){ 
    let g = e + f
    return  g
}

let num1 = 6
let num2 = 8

console.log(soma(num1,num2))

//b.

function maiorIgual (h,i) {
    return h >= i
}

console.log(maiorIgual(num1, num2))

//c.
function par(j){
    return j % 2 === 0
}

console.log(par(num1))

//d.
function tamanhoString(k){
    
    return console.log(k.length, k.toUpperCase())
}

let frase = "Olá mundo"
tamanhoString(frase)



//3.
function soma(l,m) {
    return l + m
}

function subtracao(l,m){
    return l - m
}

function multiplica(l,m){
    return l * m
}

function divisao(l,m){
    return l/m
}

let num3 = Number(prompt("Diga um número"))
let num4 = Number(prompt("Diga outro número"))

console.log
(`Números inseridos: ${num3} e ${num4} 
\n Soma: ${soma(num3,num4)} 
\n Diferença: ${subtracao(num3, num4)} 
\n Mutiplicação: ${multiplica(num3,num4)} 
\n Divisão: ${divisao(num3,num4)}`)


//Desafio
//1.
//a.
imprime = (x) => {
    return console.log(x)
  }

  let y = "Olá"

  imprime(y)

  //b.

  soma2 = (z,w) => {
      let s = z + w
    imprime(s)
  }

  let num5 = 8
  let num6 = 10
  soma2(num5, num6)

  //2.

  function hipotenusa(z,w){
     return  Math.sqrt((z*z) + (w*w))
  }

  imprime(hipotenusa(num5, num6))