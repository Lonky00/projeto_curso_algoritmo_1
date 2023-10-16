/* passou := falso
 escreval("Digite seu nome:")
 leia(nome)
 escreval("digite a nota 1 do aluno:")
 leia(nota1)
 escreval("digite a nota 1 do aluno:")
 leia(nota2)
 media <-(nota1+nota2)/2
 escreval(" A nota do aluno e :",media)
 
 se media >= 50 entao
 passou := verdadeiro
 fimse

 se ( passou ) && ( media >= 50 || media <= 70 ) entao
    escreval("APROVADO",nome)
 senao
    escreval("REPROVADO",nome)
 fimse
 */

 var nome, nota1,nota2, media, passou;
 passou=false;
 nome= prompt("Digite o nome do aluno:");
 nota1= prompt("Digite o nota 1 do aluno:");
 nota2= prompt("Digite o nota 2 do aluno:");

 media = (parseInt(nota1) + parseInt(nota2)) / 2;
 
 if(media >=50)
  passou=true;
 
  if(passou===true && (media >=50 || media <= 70))
    alert(`ALUNO ${nome} APROVADO`)
  else
  alert(`ALUNO ${nome} REPROVADO`)