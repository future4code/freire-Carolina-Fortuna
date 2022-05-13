// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = Number(prompt('Altura do retangulo:'))
  let largura = Number(prompt('Largura do retangulo:'))
  let area = altura*largura
  return console.log(area)
}
//calculaAreaRetangulo()

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number(prompt('Ano atual'))
  let anoNascimento = Number(prompt('Ano de Nascimento'))
  let idade = anoAtual - anoNascimento
  return console.log(idade)

}
//imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
 
  let imc = peso/(altura*altura)
  return imc

}
let peso1 = 85
let altura1 = 1.8

//calculaIMC(peso1,altura1)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt('Nome, queridinha?')
  let idade = (prompt('Iadade amore?'))
  let email = prompt('O e-mail da gata?')
  return console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  
  let cores1 = prompt('Diga sua cor fav')
  let cores2 = prompt('Outra')
  let cores3 = prompt('Mais uma')
  let cores = [cores1,cores2,cores3]
  return console.log(cores)

}

//imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  //let resultado = string.toUpperCase()
  return string.toUpperCase()

}
 

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let ingressosVenda = custo / valorIngresso
  return ingressosVenda

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let compara = string1.length === string2.length
  return compara
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
 let primeiro = array[0]
  return primeiro

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  let tam = array.length
  let ultimoElemento = array[tam-1]
  return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
 let tam = array.length
 let temp = 0
 temp = array[0]
 array[0] = array[tam-1]
 array[tam-1] = temp 
 
 let array2 = array
 return array2
 
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let string3 = string1.toUpperCase()
  let string4 = string2.toUpperCase()
  let compara = string3 === string4
  return compara
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
 let anoAtual = Number(prompt('Ano atual'))
 let anoNascimento = Number(prompt('Ano de nascimento'))
 let anoCarteira = Number(prompt('Ano que sua carteira foi emitida'))
 let idade = anoAtual - anoNascimento
 let idadeCarteira = anoAtual - anoCarteira
 let caso1 = (idade <= 20) && (idadeCarteira >= 5)
 let caso2 = ((idade > 20) && (idade <=50)) && (idadeCarteira >= 10)
 let caso3 = (idade > 50) && (idadeCarteira > 15)
 let renovacao = caso1 || caso2 || caso3
return console.log(renovacao)

}

//checaRenovacaoRG()

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
   return (ano % 400) === 0  || ((ano % 4 === 0 ) && (ano % 100 != 0))
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  let maiorIdade = prompt('Você tem mais de 18 anos?') == 'sim'
  let ensinoMedio = prompt('Você possui ensino médio completo?') == 'sim'
  let disponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso?') == 'sim'

  return  console.log(maiorIdade && ensinoMedio && disponibilidade)

}