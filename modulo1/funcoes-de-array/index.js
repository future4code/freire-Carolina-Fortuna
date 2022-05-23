//Leitura

//1
//object, o índice e os array de objetos.

//2
//['Amanda Ragel', 'Laís Petra', 'Letícia Chijo']

//3.
//os itens do array cuja chave apelido é diferente de Chijo
// { nome: "Amanda Rangel", apelido: "Mandi" },
//{ nome: "Laís Petra", apelido: "Laura" }


//Escrita
//1.a

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const nomeDogs = pets.map((item) =>{
//      return item.nome
//  })

//  console.log(nomeDogs)

//  //1.b

//  const salsichaDogs = pets.filter(testeSalsicha)

//  function testeSalsicha(dog){
//      return dog.raca == 'Salsicha'
//  }

// console.log(salsichaDogs)

// //1.c


// const poodleDogs = pets.filter((item) => {
//     return item.raca == 'Poodle'
// })

// const descontoPoodle = poodleDogs.map((item) => {
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
//  })
//  console.log(descontoPoodle)
    

//2.

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //2.a

 const nomeProdutos = produtos.map((item) =>{
     return item.nome
 })

 //console.log(nomeProdutos)

 //2.b

 const descontoProdutos = produtos.map((item) => {
     return {nome: item.nome, preco: item.preco*0.95}

 })

 //console.log(descontoProdutos)

 //2.c

 const bebidasProdutos = produtos.filter((item) => {
     return item.categoria == 'Bebidas'
 })

 //console.log(bebidasProdutos)

 //2.d

 const ypeProdutos = produtos.filter ((item) =>{
     return item.nome.includes('Ypê')
 })

//console.log(ypeProdutos)

//2.e

const compreYpeProdutos = ypeProdutos.map ((item) => {
    return `Compre ${item.nome} por ${(item.preco).toFixed(2)}`
})

//console.log(compreYpeProdutos)

//Desafio

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

//1.a

const nomePokemons = pokemons.map ((item) =>{
    return item.nome
})

const alfaPokemons = nomePokemons.sort()

console.log(alfaPokemons)

//1.b

const tipos = pokemons.map ((item) => {
    return item.tipo 
})

let x = 0
const tipos2 = []
for(let i=0; i< tipos.length; i++){
if(tipos[i]!= tipos[i+1]){
    tipos2[x] = tipos[i]
  }
x++
}

const tipos3 = tipos2.filter ((item) =>{
    return item !== undefined
})
console.log(tipos)
console.log(tipos2)
console.log(tipos3)