// Condicionais

const idade = 17;

if(idade > 18){
    console.log("Maior que 18")
} else{
    console.log("Menor que 18")
}


const nota = 7;

if(nota < 5){
    console.log("Abaixo da média")
} else if(nota > 5 && nota <= 7){
    console.log("Na média")
} else{
    console.log("Acima da média")
}


const nota1 = 8;

switch(true) {
    case nota1 < 5:
        console.log("Abaixo da media");
        break;
    case (nota1 > 5 && nota1 <= 7):
        console.log("Na média")
        break;
    default:
        console.log("Acima da média");
}


const nota3 = 6;

nota3 > 5 ? console.log("APROVADO") : console.log("REPROVADO")