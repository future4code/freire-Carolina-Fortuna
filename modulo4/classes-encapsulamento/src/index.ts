


// - Exercício 1
    
//     Analise a classe `UserAccount` abaixo. Perceba quais propriedades são públicas e quais 
//são privadas e responda as perguntas discursivas em comentários no arquivo `index.ts`
    
//     a) *Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?*

// O construtor é um metodo especial para criar e instanciar um objeto em uma classe 
    
//     b) *Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe 
//(dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem `"Chamando o construtor da classe User"` 
//foi impressa no terminal?*
//uma vez
    
//     c) *Como conseguimos ter acesso às propriedades privadas de uma classe?*
// utilizando os métodos getters and setters

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    public getDescription() {
        return this.cpf
        }
    
    public getValue(){
        return this.name
    }
    
    public getDate(){
        return this.age
    }
  
  }

  const user1 : UserAccount = new UserAccount (
      '02969231099', "Roberta", 23
  )

  
 class Transaction {
    private description: string;
    private value: number;
    private date: string;
   
  
    constructor(
       description: string,
       value: number,
       date: string,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.description = description
       this.value = value;
       this.date = date;
    }

    public getDescription() {
        return this.description
        }
    
    public getValue(){
        return this.value
    }
    
    public getDate(){
        return this.date
    }
}


const transaction1 : Transaction = new Transaction(
    'comprei', 100, '10/02/1992'
)


   