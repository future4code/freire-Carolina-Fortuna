enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    nome: string, 
    anoLancamento: number, 
    genero: GENERO, 
    pontuacao?: number

}

function filme (nome:string,ano: number, genero: GENERO, pontuacao?:number):Filme{
    let filme1 : Filme ={
        nome: nome,
        anoLancamento: ano, 
        genero: genero, 
        pontuacao: pontuacao
    }
        return (filme1)
    
}

console.log(filme('batman', 2021, GENERO.ACAO, 10))
console.log(filme('batman', 2021, GENERO.ACAO))