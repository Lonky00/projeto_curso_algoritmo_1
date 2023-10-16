/*
numero,fatorial,contador:inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval("Numero a calcular: ")
leia(numero)
fatorial := 1

  para contador de 1 ate numero faca
       fatorial:= fatorial*contador
  fimpara
   escreval("O FATORIAL É:",fatorial)
*/

function acaoBotao(){
  var numero,fatorial,contador
  numero = prompt("Numero a calcular: ")
  fatorial=1
  for (contador=1;numero>contador;contador++)
    fatorial=parseInt(fatorial) * parseInt(contador)

  document.getElementById("paragrafo").innerText = fatorial
}