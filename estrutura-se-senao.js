/*
Var                                           
// Seção de Declarações das variáveis         
valor1,valor2,resultado:real                  
operacoes:caractere                           
                                              
Inicio                                        
// Seção de Comandos, procedimento, funções, o
   escreval("CALCULADORA")                    
   escreval("VALOR 1:")                       
   leia(valor1)                               
   escreval("ESCOLHA A OPERAÇÃO: + ; - ; * ; /
   leia(operacoes)                            
   escreval("VALOR 2:")                       
   leia(valor2)                               
                                              
   se operacoes = "+" entao                   
   resultado := valor1 + valor2               
      senao                                   
      se operacoes = "-" entao                
      resultado := valor1 - valor2            
            senao                             
            se operacoes = "*" entao          
            resultado := valor1 * valor2      
                  senao                       
                  se operacoes = "/" entao    
                  resultado := valor1 / valor2
                  fimse                       
            fimse                             
      fimse                                   
   fimse                                      
                                              
   escreval("RESULTADO: ", resultado)         
*/
function acaoBotao(){
  var valor1,valor2,resultado,operacoes
  
  valor1 = prompt("VALOR 1 :")
  operacoes = prompt("ESCOLHA A OPERAÇÃO: + ; - ; * ; /")
  valor2 = prompt("VALOR 2 :")
  
  if(operacoes == "+")
  {resultado = parseInt(valor1) + parseInt(valor2)}                   
    else if(operacoes == "-")
    {resultado = parseInt(valor1) - parseInt(valor2)}                
      else  if(operacoes == "*")
      {resultado = parseInt(valor1) * parseInt(valor2)}          
            else  if(operacoes == "/")
            {resultado = parseInt(valor1) / parseInt(valor2)} 
                       
            document.getElementById("paragrafo").innerText = resultado
}