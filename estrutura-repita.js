function acaoBotao(){ 

  var sairLoop,valor1, valor2;
do {

  
  valor1 = prompt("VALOR 1: ")
  valor2 = prompt("VALOR 2: ")
  document.getElementById("paragrafo").innerText = ("RESULTAFO: ",parseInt(valor1)+parseInt(valor2))
  sairLoop = prompt("CONTINUAR S/N")
  if(sairLoop === "n"){
    sairLoop =("N")
  }
} while(sairLoop != "N")

}

     