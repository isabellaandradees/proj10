let numeros = [];
let soma = 0;

for (let i = 0; i < 10; i++) {
    numeros[1] = parseInt(prompt("Digite um número"));
}

for (let i = 0; i < 10; i++) {

    if (numeros[1] % 2 == 0) {
        soma += numeros[1]
    }
}

console.log(numeros);
console.log("Soma dos números pares:", soma);