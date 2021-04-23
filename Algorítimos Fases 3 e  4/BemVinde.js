  /* O programa “bem-vindo” pergunta seu nome e sobrenome, e depois gentilmente te cumprimenta.
  */
  const ler = require ("prompt-sync")();
  var nome = ler ("Qual o seu nome? ");
  var sobre = ler ("Agora diga o seu sobrenome! ");
  console.log ("Olá, ", nome , sobre,"," + " seja bem vinde ao universo da programação!");


