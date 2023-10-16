/*
Var
// Seção de Declarações das variáveis 
nome:caractere
idade:inteiro
peso,altura:real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval("NOME: ")
leia(nome)
escreval("IDADE: ")
leia(idade)
escreval("PESO: ")
leia(peso)
escreval("ALTURA: ")
leia(idade)
escreval(" NOME: ", nome, " IDADE: ", idade, " PESO: ", peso, " ALTURA: ",altura)

*/

var nome,idade,peso,altura;
nome = prompt("NOME: ")
idade = prompt("IDADE:")
altura = prompt("ALTURA:")
peso = prompt("PESO:")

document.getElementById("paragrafo").innerText = `Nome: ${nome} Idade: ${idade} Altura: ${altura} Peso: ${peso}`