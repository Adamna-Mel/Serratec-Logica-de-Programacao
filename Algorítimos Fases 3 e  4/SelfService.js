  /*O restaurante "Self-Service" precisa de um programa para imprimir as etiquetas de "comanda" 
  na pesagem dos pratos. O operador da balança irá digitar o preço do quilo e o total em gramas
  da refeição, considerando que o prato vazio pesa 465 gramas (tara). A etiqueta irá conter o nome 
  do restaurante, a tara do prato, o preço de 100 gramas, o peso consumido e o valor total.
  */
  
  const ler = require ("prompt-sync")();

  //Entradas
  var balan = ler ("Digite o preço do quilo: ");
  var total = ler ("Digite a quantidade de refeição em gramas: ");
  var grama = ler ("Digite o preço de 100 gramas: ");

  var valor = Number (balan) - Number (grama);
  
  console.log ("Matinta Vegana");
  console.log ("tara = 465 gramas");
  console.log ("100 gramas: ",grama);
  console.log ("consumo em gramas: ",total);
  console.log ("valor total: ",valor);

