  /* O aplicativo na entrada da loja possui internamente um limite de pessoas que podem estar 
  dentro do estabelecimento ao mesmo tempo. Toda vez que um cliente quiser entrar, o segurança 
  irá preencher a quantidade de pessoas já na loja, e o programa avisará se o cliente pode prosseguir.
  */
  
  // Limite 18 pessoas

  const ler = require ("prompt-sync")();
  
  var limit = ler ("Quantas pessoas estão dentro da loja? ");
  var ok = limit < 18;

  console.log ('Liberar entrada? ', ok);

