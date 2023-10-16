/*
nome:caractere
  idade,contador,limite:inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("Numero de verificação da idade:")
   leia(limite)
   contador:=0
   enquanto contador < limite faca
            escreva("Nome:")
            leia(nome)
            escreva("Idade:")
            leia(idade)
            se idade > 18 entao
               escreval(nome," E MAIOR DE IDADE!!!")
               senao
                    escreval(nome," E MENOR DE IDADE!!!")
            fimse
            contador := contador + 1
    fimenquanto
Fimalgoritmo
*/
function acaoBotao(){

  var nome,idade,contador,limite;
  
  limite = prompt("NUMERO DE VERIFICAÇÕES DA IDADE:")
  contador = 0
  while (contador < parseInt(limite) ) {
      nome = prompt("NOME:")
      idade = prompt("IDADE:")
      if(idade > 18){
        document.getElementById("paragrafo").innerText =`${nome} E MAIOR DE IDADE`
      }
      else {
        document.getElementById("paragrafo").innerText =`${nome} E MENOR DE IDADE`
      }
  contador++
  }
}