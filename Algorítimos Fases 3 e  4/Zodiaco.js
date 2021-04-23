  /* O astrólogo que escreveu o sistema “Zodíaco” acredita que os nascidos sob o signo de 
  Aquário são mais inteligentes que os demais.
  */


  //Entradas
   //Repetir sempre que precisar de leitura.
   const ler = require ("prompt-sync")();

   //Entradas
   var mes = ler("Mês do seu aniversário: ");
   var dia = ler("Dia do seu aniversário: ");

   //Processamento
   //21/01 a 19/02
   //Entre
   var inicio = mes == 1 && dia >= 21;
   var fim = mes == 2 && dia <= 19;

   var inteligente = inicio || fim;

   console.log ("Você é inteligente? " , inteligente);
   