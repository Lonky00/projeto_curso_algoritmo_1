/*
escreval("NOTA1: ")
leia(nota1)
escreval("NOTA2: ")
leia(nota2)

se(nota1 <> nota2)entao
escreval("NOTA 1 e NOTA 2 SÃO DIFERENTES !!!")
fimse
se(nota1 > nota2)entao
escreval("NOTA 1 e MAIOR QUE A NOTA 2 !!!")
se(nota1 < nota2)entao
escreval("NOTA 1 e MENOR QUE A NOTA 2 !!!")
se(nota1 = nota2)entao
escreval("NOTA 1 e NOTA 2 SÃO IGUAIS !!!")
fimse
fimse
fimse
*/
var nota1,nota2;
nota1=prompt("NOTA1: ")
nota2=prompt("NOTA2: ")

if(nota1 != nota2)
  alert("NOTA 1 e NOTA 2 SÃO DIFERENTES !!!")
if (nota1 > nota2)
  alert("NOTA 1 e MAIOR QUE A NOTA 2 !!!")
if (nota1 < nota2)
  alert("NOTA 1 e MENOR QUE A NOTA 2 !!!")
if (nota1 == nota2)
  alert("NOTA 1 e IQUAL QUE A NOTA 2 !!!")