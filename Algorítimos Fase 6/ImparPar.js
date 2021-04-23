  /* Para ajudar a criança que ainda não sabe contar “ímpar par”, o programa pergunta 
   até qual número ela quer contar, e quais ela quer ver (pares ou ímpares).
   */
   const ler = require("prompt-sync")();

  var numMax = Number(ler("Digite o numero maximo que deseja contar: "));
  var escolha = ler("Escolha PAR ou IMPAR: ")
  var contador = 0;

  while (contador < numMax) {

    contador++;

    if (escolha.toLowerCase() == "par") {
        if (contador % 2 == 0) {
            console.log("NUMERO PAR =>>", contador);
        }
    } else if (escolha.toLowerCase() == "impar"){
        if (contador % 2 !== 0) {
            console.log("NUMERO IMPAR =>>", contador);
        }
    } else {
        console.log("NUMERO =>>", contador);
    }
}