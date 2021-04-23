  /* A catraca do onibus quebrou e a empresa precisa dos dados da viagem.
     Os dados necessários para a empresa são quando a pessoa entra no onibus são as seguintes:

    Quantas pessoas ja entraram no onibus até o momento; 
    Se a pessoa é pagante ou entra com gratuidade;
    O total dos ganhos até o momento (Considerando a passagem a R$ 4,40).
    */
  const ler = require ("prompt-sync")();
  console.log("ATENÇÃO, CATRACA QUEBRADA!")
  var pessoas = ler ("Digite o número de pessoas no ônibus até o momento: ");
  pessoas = Number (pessoas);
  var gratuidade = ler ("Informe quantas pessoas que entraram com gratuifdade: ");

  var naopagante;
  naopagante = gratuidade;
  var pagante;
  pagante = pessoas - gratuidade;
  console.log ("O total de ganhos até o momento é de: " + pagante * 4.40 + " reais");
  console.log ("FORA DE CIRCULAÇÃO");

  