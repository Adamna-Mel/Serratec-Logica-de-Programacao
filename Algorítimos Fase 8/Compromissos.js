  /* O programa “Compromissos” gerencia a sua agenda do mês. 
 Você pode digitar um compromisso, informando o dia e a descrição do evento,
  e consultar se existe algum apontamento para determinado dia.
  */

  const ler = require("prompt-sync")();

  var dia = [];
  do{
  var diaMarcar =  Number( ler("Digite o dia do mês para agendar um compromisso: "));
  var emUso = "";
  var compromisso;
 
    for (let index = 0; index < dia.length; index++) {
        if ( dia[index] == diaMarcar ){
            emUso = true;
        } 
    }
    if (emUso == true){
        var condicao = ler("Essa data já está em uso, deseja agendar outro dia? ")
    }else{
        dia.push(diaMarcar);
        var compromisso = ler("Qual compromisso deseja agendar no dia " + diaMarcar +"? ");
        console.log("Seu compromisso: " + compromisso + ", foi agendado com sucesso!");
        condicao =  ler("Se deseja agendar outro compromisso digite (sim): ");
    }
    } while(condicao == "sim" )