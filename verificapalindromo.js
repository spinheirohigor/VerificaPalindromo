

//METODO 1 - USANDO SPLIT, REVERSE E JOIN
//Split fará a separação
//Reverse fará a inversão
//Join fará a junção

function verifica(string) {

    if (!string) return console.log("String inexistente");
    return (string.split("").reverse().join("") === string) ? console.log('é um palindromo') : console.log('não é um palíndromo');
}

string = "ovo"; //atribuir um valor para checagem
verifica(string);


// METODO 2 - USANDO O LAÇO FOR

function confere(array) {
    if (!array) return console.log("String inexistente");
    for (let i = 0; i < array.length / 2; i++) { // dividimos por 2 pois não será necessário percorer o vetor inteiro.
        if (array[i] !== array[array.length - 1 - i]) return console.log("não é um palindromo"); return console.log("é um palindromo");
    }
}
array = "ovo"; //atribuir um valor para checagem
confere(array);