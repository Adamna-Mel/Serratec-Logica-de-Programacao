  /* É muito comum vermos promoções em mercados e shoppings relacionadas ao valor das compras.
   Se a Alice fez suas compras em um shopping cuja promoção era que a cada R$ 190,00 em compras 
   ela ganhava um cupom, quantos cupons ela ganhou?
   */
  
  
  console.log ("Confira quantos cupons você ganhou nessa compra!")
  
  var valor = 1890;
  var cupom = 190;
  var cupons = valor / cupom;
  var cupons = Math.trunc (cupons);

  console.log ("Parabéns, você ganhou: ", cupons + " cupons!")

