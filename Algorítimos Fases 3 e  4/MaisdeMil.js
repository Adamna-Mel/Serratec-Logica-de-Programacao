  /* O sistema “Mais que mil” apresenta o resultado da soma dos 4 primeiros múltiplos de 4 acima de mil,
   subtraindo dos 4 primeiros números primos a partir de zero.
   */
   
 // Múltiplos de 4 acima de 1000: 1004, 1008, 1012, 1016

  var mult = 1004 + 1006 + 1012 + 1016;
  var prim = 1 + 2 + 3 + 5;
  var resultado = prim - mult;
  console.log ("O resultado é: ", resultado);
  