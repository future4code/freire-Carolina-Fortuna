function tipo (variavel:any):void{
    let tipoVar: string = typeof(variavel)
     return console.log(tipoVar)
 }
 
 tipo('carol')
 tipo(45)
 tipo(true)