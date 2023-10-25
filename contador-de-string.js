function acaoBotao() { 
  var minhaString = "euEstouIndoEmboraAgora";

// Use uma expressão regular para encontrar maiúsculas seguidas de minúsculas
var palavrasSeparadas = minhaString.replace(/([a-z])([A-Z])/g, '$1 $2');

// Use o método split para dividir a string nos espaços
var arrayDePalavras = palavrasSeparadas.split(' ');

// Acesse o número de palavras no array
var numeroDePalavras = arrayDePalavras.length;

console.log(palavrasSeparadas);
console.log(arrayDePalavras); // Isso imprimirá ["eu", "Estou", "Indo", "Embora"]
console.log("Número de palavras:", numeroDePalavras); // Isso imprimirá "Número de palavras: 4"
}
