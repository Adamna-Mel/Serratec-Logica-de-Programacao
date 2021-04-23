 /* Dois amigos vão utilizar o programa “Maioral”. Sem olhar pra tela (pra um não ver o valor do outro),
  cada um irá digitar um número inteiro no teclado. Vamos saber quem digitou o número maior, 
  pelos resultados na tela.
  */
  
  const ler = require ("prompt-sync")();
  var maluco = ler ("Digite um número: ");
  var doido = ler ("Digite um número: ");

  var resultado1 = maluco > doido;
  console.log ("Maluco digitou o maior número? ", resultado1);

  var resultado2 = doido > maluco;
  console.log ("Doido digitou o maior número? ", resultado2);

  var resultado3 = maluco == doido;
  console.log ("Houve empate? ", resultado3);
  
  
