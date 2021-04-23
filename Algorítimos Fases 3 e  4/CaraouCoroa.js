  /* O programa “Cara ou coroa” irá funcionar assim: O sistema irá solicitar um número, 
  o jogador irá digitar o valor que preferir. O programa então irá exibir uma resposta em texto fixo,
   onde a única variável é o resultado da
   */

   //Repetir sempre que precisar de leitura
   const ler = require ("prompt-sync") ();

   //Cabeçalho do programa
   
   console.log ("Como está a sua sorte?");

   //Entrada
   const texto = ler ("Jogue a moeda (digite qualquer número): ");

   //Processamento
   var numero = Number(texto);
   var resultado = numero % 2;

   //Saídas
   console.log("Veja o resulatdo abaixo: sendo 0 é cara, sendo 1 é coroa: ");
   console.log("O sorteio deu: ", resultado, "!");