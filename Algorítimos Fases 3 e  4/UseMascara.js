  /* Em tempos de pandemia, só é permitido entrar em templos religiosos pessoas de máscara. 
  Na portaria deve ser medida a temperatura à distância, e o valor não deve ultrapassar 37,5º.
  */
   // Usa máscara: Não
  // Temperatura: 36.9
  // Autorizar a entrada? False
  
  const ler = require ("prompt-sync")();
  //Entradas

  var masc = ler ("Usa máscara? ");

  var temp = ler ("Temperatura <= 37,5: ");

  //Processamento

  var sim = "sim";

  var pode = masc == sim && temp == sim;


  //Saída
  console.log ("Autorizar entrada? ", pode);



