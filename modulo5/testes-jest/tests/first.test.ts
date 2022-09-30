import { randomBytes } from "crypto"


describe("exercicios",()=>{

    test("O número deve ser par", ()=>{

        expect(ehPar(102)).toBe(true)

    })

    
    test("A string deve estar em caixa alta", ()=>{

        expect(geraCaixaAlta('bananinha')).toMatch('BANANINHA')

    })
 
    test("A string deve ser decomposta em um array de letras", ()=>{

        expect(explodeString('bomba')).toEqual(["b","o","m","b","a"])

    })

    
    test("A string deve virar um number", ()=>{

        expect(toNumber('3')).toEqual(3)

    })

    test("Deve retornar o comprimento da astring", ()=>{

        expect(lenght('abc')).toEqual(3)
    })

    
    test("Deve retornar um numero maior que de 1", ()=>{

        expect(numeroAleatorio()).toBeGreaterThanOrEqual(1);
        expect(numeroAleatorio()).toBeLessThanOrEqual(10)
    
    })

    test("Deve conter o ususário Astrodev", ()=>{

        const Astro:IUser = {
            id: "3",
            name: "Astrodev",
            age: 50
        }
        expect(users).toContainEqual(Astro)

     
    })
})

const ehPar = (int : number) =>{
    if(int % 2 == 0)
    return true 
}

const geraCaixaAlta = (palavra: string) =>{
    return palavra.toLocaleUpperCase()
}

const explodeString = (palavra: string) =>{
    return palavra.split('')
}

const toNumber = (string:string) =>{
    return Number(string)
}

const lenght = (palavra:string) =>{
    return palavra.length
}

const numeroAleatorio = () =>{
    const min = 1
    const max = 10
		const result = Math.floor(Math.random() * (max - min + 1)) + min

		return result
}

interface IUser {
    id: string,
    name: string,
    age: number
}

const users: IUser[] = [
    {
        id: "1",
        name: "Alice",
        age: 20
    },
    {
        id: "2",
        name: "Bob",
        age: 18
    },
    {
        id: "3",
        name: "Astrodev",
        age: 50
    }
]