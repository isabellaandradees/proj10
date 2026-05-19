let numeros = [];
let contador = 0;

for (let i = 0; i < 10; i++) {
    numeros[i] = parseInt(prompt("Digite um número"));
}

let numero = parseInt(prompt("Digite o número para pesquisar"));

for (let i = 0; i < 10; i++) {

    if (numeros[i] == numero) {
        contador = contador + 1;
    }
}

console.log(numeros);
console.log("Quantidade:", contador);