  /* O programa "Educado" irá perguntar o seu nome, e também como você gostaria de ser chamado. 
  Depois disso, uma saudação para você aparece na tela.
  */
   const ler = require ("prompt-sync")();
   var nome = ler ("Qual o seu nome? ");
   var apelido = ler ("Como você gostaria de ser chamado(a)? ");
   console.log ("Bem vinde, ", apelido , "!!");
