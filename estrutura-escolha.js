function acaoBotao(){
  var valor1,valor2,resultado,operacoes
  
  valor1 = prompt("VALOR 1 :")
  operacoes = prompt("ESCOLHA A OPERAÇÃO: + ; - ; * ; /")
  valor2 = prompt("VALOR 2 :")
  
  switch (operacoes) {
    case "+":
        resultado = parseInt(valor1) + parseInt(valor2)
        break;                   
    case "-":
        resultado = parseInt(valor1) - parseInt(valor2)
        break;                   
    case "*":
        resultado = parseInt(valor1) * parseInt(valor2)
        break;                   
    case "/":
        resultado = parseInt(valor1) / parseInt(valor2)
        break;                   
  }

  document.getElementById("paragrafo").innerText = resultado
}