  /*Os boletos da "Universidade" são emitidos com vencimento no dia 15 do mês. Para os pagamentos 
  recebidos entre os dias 10 a 13, será concedido um desconto na próxima mensalidade. O programa
  irá receber o número do boleto e o dia do pagamento, e emitir o extrato.
  */

  const ler = require("prompt-sync")();

  var diaHoj = parseInt(ler("Digite o dia de hoje: "));
  var numBoleto = ler("Numero do boleto: ");
  var diaPag = parseInt(ler("Dia do pagamento: "));

  var desconto = diaPag >= 10 && diaPag <= 13;

  console.log("EXTRATO");

  if (desconto) {
    console.log("Desconto na próxima mensalidade do boleto", numBoleto, "?", desconto);
} else {
    console.log("Desconto na próxima mensalidade do boleto", numBoleto, "?", desconto);
}
