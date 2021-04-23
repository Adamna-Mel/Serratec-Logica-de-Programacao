  //O programa “termômetro” lê uma temperatura em graus Celsius, e devolve sua equivalência 
  //na escala Fahrenheit.

  const prompt = require ("prompt-sync")();
  const celsios = prompt ("Digite temperatura em graus Celsius:  ");


  let fahr = celsios * 1.8 + 32;
  console.log ("A temperatura convertida em Fahrenheit é:  ", fahr);

