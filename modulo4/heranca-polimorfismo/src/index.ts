// // - Exercício 1
    
// //     a) *Seria possível imprimir a senha (`password`) atrelada a essa instância?*
// //não é possivel pois é um campo privado que não tem metodo get, entretanto é possivel imprimir a instancia completa 
// //com password incluso
    
// //     b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
// //uma vez

// class User {
//     private id: string;
//     private email: string;
//     private name: string;
//     private password: string;
  
//     constructor(
//           id: string,
//           email: string,
//           name: string,
//           password: string
//       ){
//           console.log("Chamando o construtor da classe User")
//           this.id = id
//           this.email = email
//           this.name = name 
//           this.password = password
//       }

//       public introduceYourself(): void {
//           console.log(`Olá,  ${this.name}. Bom dia!`)
//       }
  
//      public getId(): string {
//           return this.id
//       }
  
//       public getEmail(): string {
//           return this.email
//       }
  
//       public getName(): string {
//           return this.name
//       }
//   }

// const user1: User = new User ('12345','lalalal@hotmil.com', 'ana','123345')

// console.log(user1)

// const email = user1.getEmail()

// console.log(email)


// // a) *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal?* 
// //uma vez

// // b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?*
// //uma vez

// class Customer extends User {
//     public purchaseTotal: number = 0;
//     private creditCard: string;
  
//     constructor(
//       id: string,
//       email: string,
//       name: string,
//       password: string,
//       creditCard: string
//     ) {
//       super(id, email, name, password);
//       console.log("Chamando o construtor da classe Customer");
//       this.creditCard = creditCard;
//     }
  
//     public getCreditCard(): string {
//       return this.creditCard;
//     }
//   }

//   const consumer1:Customer = new Customer('12345', 'abc@hsdosahd.com', 'bia', '2334747483833', '1646536372728')

//   console.log(consumer1)

//  const creditCard = consumer1.getCreditCard()

//  console.log(creditCard)

// // a) Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
// //não é possivel imprimir a senha sozinha pois é privadoe  nao tem metodo

// user1.introduceYourself()

// // Polimorfismo

export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }

//   const client1 : Client ={
//       name: 'maria',
//       registrationNumber: 124,
//       consumedEnergy: 17336,

//       calculateBill: ()=>{
//           return 2
//       }
//     }

// console.log(client1)

//a) Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
//calculateBill por que não é um valor, é uma função. é possivel chamar a função e gurdar o resultado em uma variável
//e assim imprimir o resultado no console


export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
}


// a) *Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: `new Place(...)`). 
//Qual foi o erro que o Typescript gerou?*
//cannot create an instance of an abstract class.ts(2511)
//const place1 : Place = new Place ()

//b) *Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?*
//retirar o abstract, ou sobreescreve-lo

export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }

    public getResidents(): number {
        return this.residentsQuantity
    }
  }

const residence1 : Place = new Residence (2, '9172636336227')
console.log(residence1)

export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }

    public getFloorsQuantity(): number{
        return this.floorsQuantity
    }
  }

const commerce1: Place = new Commerce (2, '8373474832497')
console.log(commerce1)

export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      
      cep: string
          ) {
          super(cep);
    }

    public getMachinesNumber(): number {
        return this.machinesQuantity
    }
  }

const industy1: Place = new Industry (40, '2328349032840239')

console.log(industy1)

const cepInd =industy1.getCep()
console.log (cepInd)

class ResidentialClient extends Residence implements Client {
  
  constructor(
    public name: string,
   public registrationNumber: number,
   public consumedEnergy: number,
   private cpf: string,
   cep: string,
   redidentsQuantity: number
  ){
      super(redidentsQuantity, cep)
  }

  public getCPF (): string{
      return this.cpf
  }

  public calculateBill(): number {
      return this.consumedEnergy * 0.75
  }
}

//a) *Que métodos e propriedades essa classe possui? Por quê?*
//metodos: calculate bill e getCPF e propriedades 6

class CommercialClient extends Commerce implements Client {
    constructor(
   public name: string,
   public registrationNumber: number,
   public consumedEnergy: number,
   private CNPJ: string,
   floorsQuantity: number,
   cep: string
    ){
        super(floorsQuantity, cep)
    }

    public getCNPJ():string{
        return this.CNPJ
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53
    }
}

class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private registration: string,
        machinesQuantity: number,
        cep: string
    ){
        super(machinesQuantity, cep)
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53
    }

    public getRegistration(): string{
        return this.registration
    }
}

// a) *De* q*ual classe a `IndustrialClient` deve ser filha? Por quê?*
//Industry, a qual se estende

// b) *Que interface a `IndustrialClient` implementa? Por quê?*
//Client, a qual implementa

// c) *Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?*
//Por que são valores que não mudam, portanto não é necessário setters