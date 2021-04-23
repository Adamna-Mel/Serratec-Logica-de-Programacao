  /* O programa “Quadrado” terá um código adaptado do item anterior,
   para calcular o quadrado do número digitado.
   */

   const ler = require("prompt-sync")();
   var numero1 = ler ("Digite um número:");
   var numero2 = numero1 * numero1;
   console.log ("O resultado de " + numero1 + " ao quadrado é:", numero2);

