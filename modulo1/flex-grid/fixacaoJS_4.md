function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
let i = 0;
let x; 
  for(x of arrayDeNumeros){
    if(x == numeroEscolhido){
      i++;
    }
  }
  if( i == 0){
    return 'Número não encontrado'
  }
  if(i>0){
    return `O número ${numeroEscolhido} aparece ${i}x`
  }
}