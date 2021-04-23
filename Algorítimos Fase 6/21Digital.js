  /* No jogo de cartas “21 digital” o jogador é quem entrega uma carta ao programa, que armazena o valor 
  e solicita a próxima carta. A vitória é do jogador quando a soma das cartas dá exatos vinte e um, ou ganha 
  o carteador quando a soma ultrapassa esse valor.
  */
  const ler = require("prompt-sync")();

var jogador1 = ler("Digite o nome do jogador 1: ");
var jogador2 = ler("Digite o nome do jogador 2: ");
var jogador = "";
var somaCart = 0;

do {

    if (jogador == jogador1) {
        jogador = jogador2
    } else {
        jogador = jogador1
    }

    var valor = parseInt(ler("Digite o valor da carta: "));
    somaCart = somaCart + valor;
  
} while (somaCart < 21);

if (somaCart > 21){
    console.log("Opa, parece que o carteiro venceu!", somaCart);
} else {
    console.log("Parabéns, o jogador ", jogador, " venceu!! Total", somaCart )
}