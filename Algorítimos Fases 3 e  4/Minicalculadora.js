  /*Crie o programa “mini calculadora”, que após ler dois números inteiros,
  apresenta as operações de soma, subtração, multiplicação e divisão com eles.
  */
  
  const ler = require ("prompt-sync")();

  var num1 = ler ("Por favor, digite um número: ");
  var num2 = ler ("Agora, digite outro numero: ");

  var val1 = Number (num1);
  var val2 = Number (num2);
  var soma = val1 + val2;
  console.log ("A soma de é:  ", soma);

  var subt = (num1 - num2);
  console.log ("A subtração é: ", subt);

  var mult = (num1 * num2);
  console.log ("A multiplicação é: ", mult);

  var div = (num1 / num2);
  console.log ("A divisão é: ", div);
