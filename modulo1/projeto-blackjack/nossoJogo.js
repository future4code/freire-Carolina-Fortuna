/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */



    console.log('Boas vindas ao jogo de Blackjack')

    if(confirm("Quer iniciar uma nova rodada?")){
       //incia jogo
      let cartaComputer1 = comprarCarta()
      let cartaComputer2 = comprarCarta()
      let cartaJogador1 = comprarCarta()
      let cartaJogador2 = comprarCarta()

      console.log(`Usuário - cartas: ${cartaJogador1.texto} ${cartaJogador2.texto}- pontuaçao ${cartaJogador1.valor + cartaJogador2.valor}`)
      console.log(`Computador - cartas: ${cartaComputer1.texto} ${cartaComputer2.texto} - pontuaçao ${cartaComputer1.valor + cartaComputer2.valor } `)

      if((cartaComputer1.valor+cartaComputer2.valor) > (cartaJogador1.valor+cartaJogador2.valor)){
         console.log('O computador ganhou!')
      }

      if((cartaComputer1.valor+cartaComputer2.valor) < (cartaJogador1.valor+cartaJogador2.valor)){
         console.log('O humano ganhou!')
      }

      if((cartaComputer1.valor+cartaComputer2.valor) == (cartaJogador1.valor+cartaJogador2.valor)){
         console.log('Emapte!')
      }
      

    }
    else{
       console.log('O jogo acabou.')
    }
