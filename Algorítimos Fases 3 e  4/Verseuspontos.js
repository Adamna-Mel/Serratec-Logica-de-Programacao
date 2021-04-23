  /* O “Programa de fidelidade” solicitou a criação do sistema “Ver os seus pontos”, 
  onde o cliente poderá consultar seu saldo de pontos.
   O cliente irá digitar um número inteiro correspondente aos seus cupons. Cada cupom corresponde a 1 ponto.
   */
   const ler = require ("prompt-sync") ();
   var cupom = ler (" Digite o número de cupons que possui: ");
   var pontos = cupom 
   console.log ("De acordo com seus cupons, você tem " + cupom + " pontos no programa de fidelidade!")
