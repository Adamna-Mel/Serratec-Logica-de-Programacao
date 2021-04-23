  /*O programa “Financeira” irá solicitar que o cliente digite seu nome, empresa e função, 
  além do valor do empréstimo que deseja contratar. Então será calculado 86% do valor desejado 
  como crédito disponível. A resposta ao cliente deve seguir o exemplo abaixo.
  Para escrever as mensagens, utilize variáveis com concatenação de strings. 
  O valor será escrito separadamente (no console.log).
  */

  const ler = require ("prompt-sync")();

  //Entradas
  var nome = ler ("Qual o seu nome? ");
  var empresa = ler ("Digite o nome da empresa em que trabalha: ");
  var cargo = ler ("Agora digite sua função na empresa: ");
  var valor = ler ("Qual o valor do empréstimo que deseja? ");

  //Processamento
  var dispon = Number(valor) * 86 / 100;

  //Saídas
  console.log ("Senhor(a)" , nome,"," + " você está com sorte!")
  console.log ("Pela sua função de " , cargo, " e sua excelente relação ");
  console.log ("com a empresa onde trabalha, foi aprovado um crédito");
  console.log ("em sua conta corrente no valor de " , dispon,"!!");


