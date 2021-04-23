  /* O programa “mini departamento pessoal” lê a quantidade de horas trabalhadas por um funcionário 
  em um mês, o valor que ele recebe por hora e o percentual de desconto para o INSS, e calcula:
  */
   //O salário bruto (horas trabalhadas * valor hora)
  //O valor do desconto para o INSS
  //O salário líquido (adicionais menos descontos).
  //Após os cálculos, será impresso o contracheque. O contracheque é a exibição no console das informações 
  //com formatação: Salário bruto, valor do desconto do INSS, e o salário líquido do funcionário.
  
  const ler = require ("prompt-sync")();

  var hora = ler ("Informe quantidade de horas trabalhadas no mês: ");
  var valor = ler ("Qual o valor/hora? ");
  var inss = ler ("Digite o percentual de desconto do INSS: ");

  var bruto = hora * valor;
  var desc = bruto * inss;
  var liq = bruto - desc;
  
  console.log ("Salário bruto: ", bruto);
  console.log ("Valor de INSS descontado: ", desc);
  console.log ("Salário líquido: ", liq);

