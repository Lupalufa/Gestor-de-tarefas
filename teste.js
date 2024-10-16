const prompt = require("prompt-sync")();

// const frutas = ['maçã','banana','laranja'];
// frutas.forEach((fruta) => {
//     console.log(`${fruta}`)
// })

// const numeros = [1,2,3,4];
// const pares = numeros.filter(num => num % 2 === 0)
// console.log(pares)

// const numeros = [1,2,3,4];
// const pares = numeros.filter(function verificarPares(par) {
//     return par % 2 === 0
// })

// console.log(pares)

// const numeros = [6,2,3,4];
// const soma = numeros.reduce(function somar(acumulador,num){
//     return acumulador + num 
// })

// console.log(soma)

let valordigitado;
do {
    let valordigitado = prompt("Digite um valor")
} while (valordigitado !== "sair");