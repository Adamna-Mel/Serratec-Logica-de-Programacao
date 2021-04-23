  /* O programa “Relacionais” lê os inteiros A e B. Utilizando variáveis booleanas, 
  escreve na tela o resultado de cada operação relacional com os números.
  */

  const ler = require ("prompt-sync")();
  var a = ler ("Digite um número inteiro: ");
  var b = ler ("Digite outro número: ");

  var igual = a == b;
  console.log ("Resultado: ", igual);

  var dife = a != b;
  console.log ("Resultado: ", dife);

  var maior = a > b;
  console.log ("Resultado: ", maior);

  var menor = a < b;
  console.log ("Resultado: ", menor);

  var maiou = a >= b;
  console.log ("Resultado: ", maiou);

  var menou = a <= b;
  console.log ("Resultado: ", menou);





