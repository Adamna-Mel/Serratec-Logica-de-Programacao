  /* É considerado “Emancipado” qualquer pessoa a partir de 21 anos, ou o indivíduo 
  do sexo masculino a partir dos 18 anos. Crie um programa para atestar a emancipação 
  do cidadão segundo o ano do seu nascimento.
  */
  //Sexo: Feminino
  //Ano de nascimento: 1999
  //Cidadão emancipado? True

  const ler = require ("prompt-sync")();

  var masc = "masculino";
  var fem = "feminino";

  var sex = ler ("Qual o sexo? ");
  var ano = ler ("Qual o ano de nascimento? ");
  
  var emanc = sex == masc && ano <= 2003 || sex == fem && ano <= 2000;
  
  //var naoeman = sex == masc && ano > 2003 || sex == fem && ano > 2000;

  console.log ("Emancipado(a)? ", emanc);

  



