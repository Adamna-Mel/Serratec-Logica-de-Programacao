  /* Alice foi até uma loja de eletrônicos e comprou alguns jogos e um videogame novo,
   pagando R$ 345,00 por todos os jogos e R$ 1.545,00 pelo videogame. Para o pagamento, 
   o sistema irá apresentar 3 opções de parcelamentoe o valor de cada parcela: 3 vezes sem juros,
    5 vezes sem juros e em 10 vezes com 1,5% de juros sobre o total da compra.
    */

    var jogos = 345.0;
    var videogame = 1545.0;

    //Cabeçalho
  console.log ("LOJA DE JOGOS GEEK HOUSE");

  //Processamento
  var total = jogos + videogame;

  //Saídas
  console.log ("Total da sua compra: ", total);
  console.log ("Opções de parcelamento: ");

  var parcela = total / 3;
  console.log ("3 vezes sem juros: ", parcela);

  var parcela = total / 5;
  console.log ("5 vezes sem juros: ", parcela);
  
  var parcela = total / 10;
  var parcela = parcela + (parcela * 1.5) / 100;
  console.log ("10 vezes com juros (1.5%): ", parcela);

  console.log ("Obrigada por comprar com a gente!");

    
