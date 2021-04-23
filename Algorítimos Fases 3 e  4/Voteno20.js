 /* No programa “Vote no 20”, após solicitar a idade, o sistema apresenta se o indivíduo já pode
  exercer sua cidadania nas urnas. 

  == Eleições 2020 ==
  Digite sua idade: 17
  Você já pode votar? True
  */
   const ler = require ("prompt-sync")();
   var idade = ler ("Informe sua idade: ");

   var pode = idade >= 17;
   console.log ("Você pode votar? ", pode);
   


