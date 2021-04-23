  /* Indique o resultado das expressões relacionais abaixo. 
   Utilize uma variável para atribuir a sentença, e então exibir
   na tela o resultado booleano. Declare as variáveis a seguir e, 
   para os símbolos, faça as substituições.
   x: 6.0; y: 2; z: 4.000; a: 8; b: 7.5; c: 12
   M: maior que; m: menor que; MI: maior ou igual; mi: menor ou igual;
   mod: resto; <>: diferente
   Dica: Para algumas operações será necessário o uso de parênteses.
   *
   a) x - y M a
   b) x - y * a M c mod y
   c) y <> c
   d) x * y <> c
   e) c mod y mi y mod c
   f) a m b
   g) z / a + x * y - 5 MI b
   h) c * z + 2 = a * x + y
   i) c = z + b
   j) y * 2 <> 7 - b
  */
  var a = 6.0 - 2 > 8;
  console.log ("Resultado da expressão a é: ", a);

  var b = 6.0 - 2 * 8 > 12 % 2
  console.log ("Resultado da expressão b é: ", b);

  var c = 2 != 12;
  console.log ("Resultado da expresão c é: ", c);

  var d = 6.0 * 2 != 12;
  console.log ("resulatado da expressão d é: ", d);

  var e = 12 % 2 <= 2 % 12;
  console.log ("Resultado da expressão e é: ", e);

  var f = 8 < 7.5;
  console.log ("Resultado da expressão f é: ", f);

  var g = (4.000 / 8) + 6.0 * 2 - 5 >= 7.5;
  console.log ("Resultado da expressão g é: ", g);

  var h = 12 * 4.000 + 2 == 8 * 6.0 + 2;
  console.log ("Resultado da expressão h é: ", h);

  var i = 12 == 4.000 + 7.5;
  console.log ("Resultado da expressão i é: ", i);

  var j = 2 * 2 != 7 - 7.5;
  console.log ("Resultado da expressão j é: ", j);
  


