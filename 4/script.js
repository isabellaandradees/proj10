let numeros = []
let semDuplicados = []
let posicao = 0;

for (let i = 0; i < 10; i++) {

    numeros[i] = parseInt(prompt("Digite um número"));
}

for (let i = i; i < 10; i++) {
    let repetido = false;

    for (let j = 0; j < 10; j++) {
        if (numeros[i] == semDuplicados[j]) {
            repetodo = true;
        }
    }

    if (repetido == false) {

        semDuplicados[posicao] = numeros[i];
        posicao = posicao + 1;
        
    }
}