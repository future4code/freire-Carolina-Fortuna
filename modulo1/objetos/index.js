// Exercicios de leitura
//1.
//Matheus Naschtergaele
//Virginia Cavendish
//canal: Globo 
//horario: 14h

//2.a
//	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"

//	nome: "Juba", 
// 	idade: 3, 
// 	raca: "SRD"

//	nome: "Jubo", 
// 	idade: 3, 
// 	raca: "SRD"

//2.b
// Os tres pontos copiam o objeto acessado e é possivel modificar ou adicionar 
//chaves

//3.a
//retorna pessoa["backender"]
//false

//retorna pessoa["altura"]
//undefined

//3.b
//A função acessa a chave especificada, no caso de backender
// continha false e no caso de altura, essa chave não foi criada
//por isso deu undefined

//Escrita 
//1.a

const pessoa = {
    nome: "Carolina",
    apelidos: ["Carol", "Carolzinha", "Ca"]
}

function nomePessoa(objeto, campo1, campo2) {
    return console.log(`Eu sou ${campo1}, mas pode me chamar de: ${campo2}`)

}

nomePessoa(pessoa, pessoa.nome, pessoa.apelidos)

//1.b

const pessoa2 = {
    ...pessoa,
    apelidos: ['Beyonce', 'Rihanna', 'Nicki']
}

nomePessoa(pessoa2, pessoa2.nome, pessoa2.apelidos)

//2.a

const obj1 = {
    nome: 'Carol',
    idade: 28,
    profissao: 'estudante'
}

const obj2 = {
    nome: 'Vini',
    idade: 33,
    profissao: 'servidor publico'
}

//2.b

function minhaFuncao(a) {
    let array = [a.nome, a.nome.length, a.idade, a.profissao, a.profissao.length ]
    return console.log(array)
}

minhaFuncao(obj2)

//3.a
let carrinho = []

//3.b

const fruta1 = {
    nome: "maçã",
    disponivel: true
}

const fruta2 = {
    nome: "banana",
    disponivel: true
}

const fruta3 = {
    nome: "uva",
    disponivel: true
}

//3.c

function feira(array, obj){
    return array.push(obj)
}

//3.d

feira(carrinho, fruta1)
feira(carrinho, fruta2)
feira(carrinho, fruta3)

console.log(carrinho)

//Desafio

//1

function usuario (){
    const obj = {
        nome: prompt('Nome'),
        idade: prompt('idade'),
        profissao: prompt('profissão')
    }
    return console.log(obj, typeof(obj))
}

usuario()

//2

function filme(a,b){
    return console.log( 'O primeiro filme foi lançado antes do segundo?', a.ano < b.ano,
    'O primeiro filme foi lançado no mesmo ano do segundo?', a.ano === b.ano )
}

const filme1 = {
    nome: 'Duna',
    ano: 2021
}

const filme2 = {
    nome: 'Homem Aranha',
    ano: 2021
}

filme(filme1, filme2)

//3

function controleFeira (a){
    a.disponivel = !a.disponivel
    return console.log(a)
}

controleFeira(fruta1)