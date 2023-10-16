/*
escreval("VALOR1:")
   leia(valor1)
   escreval("VALOR2:")
   leia(valor2)
   escreval("VALOR3:")
   leia(valor3)
   escreval("VALOR4:")
   leia(valor4)
   resultado := (((valor1+valor2)/(valor3-valor4))*(valor1+valor2+valor3+valor4))
   resto := resultado %2
   escreval("O RESULTADO DEU: ",resultado)
   escreval("O RESTO DEU:",resto)
*/

var resultado,resto,valor1,valor2,valor3,valor4;
valor1=prompt("VALOR1: ")
valor2=prompt("VALOR2: ")
valor3=prompt("VALOR3: ")
valor4=prompt("VALOR4: ")
resultado = (((valor1+valor2)/(valor3-valor4))*(valor1+valor2+valor3+valor4));
   resto = resultado %2;
   alert(`RESULTADO ${resultado}  RESTO ${resto}`);