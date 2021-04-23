  /* Exercício : Teatro_do_Monstro
// O teatro do monstro permite a entrada de até 5 pessoas;
// A peça só começa após atingir a lotação máxima;
// Nesta peça é proibida a entrada de menores de 16 anos;
// O gerente quer saber quantos são homens e quantos são mulheres antes da peça começar.
*/
  const ler = require ("prompt-sync")();
  const limite = 5;
  var homem = 0;
  var mulher = 0;

  for (var i = 0; i < limite; i++)
  {
      var idade = Number (idade);
      idade = ler ("Qual sua idade? ");
      if (idade >= 16)
  {

  }
var genero = ler ("Você é homem ou mulher? ");
switch (genero) {
    case "Homem":
    case "homem":
    case "H":
        console.log("Bem vindo!");
        homem++
    break;
    case "Mulher":
    case "mulher":
    case "M":
        console.log("Bem vinda!");
        mulher++
    break;
}
   console.log("Proibido para menores!");
   console.log("Haverá " + mulher + "mulheres e " + homem +" homens na sala.")
  }