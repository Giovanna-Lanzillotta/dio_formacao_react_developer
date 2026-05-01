// Laços de repetição
// for  -  while  -  foreach  -  map

for(let i = 1; i <= 10;i++){
    console.log('valor',i)
}


console.log("\nTabuada do 5 usando FOR")
for(let i = 1; i <= 10;i++){
    console.log(`${i} x 5 = ${i*5}`)
}


console.log("\Números pares")
for(let i = 1; i <= 10;i++){
    if(i % 2 === 0){
    console.log(i)
    }
}


let x = 1;
console.log("\nTabuada do 9 usando WHILE")
while(x <= 10) {
    console.log(`${x} x 9 = ${x*9}`)
    x++;
}


console.log("\nTabuada do 4 usando ForEach")
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
valores.forEach((value)=>{
    console.log(`${value} x 4 = ${value*4}`);
})


console.log("\nTabuada do 6 usando map")
const valores2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = valores.map((value)=>{
    return value * 6
})
console.log(resultado);