  /* O jogo “pirâmiDe” solicita a altura da pirâmide, e imprime uma divertida pirâmide de letras D no console.
  */

  const ler = require("prompt-sync")();

  var letra = "D";
  var altura = Number(ler("Digite a altura da pirâmide ?"))

  for (let index = 0; index < altura; index++) {
  console.log(letra);
  letra = letra + "D";
}