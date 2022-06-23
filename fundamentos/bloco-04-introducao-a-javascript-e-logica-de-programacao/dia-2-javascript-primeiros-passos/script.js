//Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//1 - Resposta

for (let contador = 0; contador < numbers.length; contador++) {
    console.log(numbers[contador]);
}


//2 - Resposta 278
let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let totalValoresArray = 0;
for (let cont = 0; cont < numbers2.length; cont++) {
    totalValoresArray += numbers2[cont];

}
console.log(totalValoresArray);

//3 - Resposta
let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let mediaAritmetica = 0;
let tamanhoArray = numbers3.length;
for (let contador = 0; contador < numbers3.length; contador++) {

    mediaAritmetica += (numbers3[contador]) / tamanhoArray
}

console.log(mediaAritmetica);


//4 - Resposta

let numbers4 = [1, 9, 3, 19, 70, 8, 20, 2, 35, 27];
let mediaAritmetica4 = 0;
let tamanhoArray4 = numbers4.length;
for (let contador = 0; contador < numbers4.length; contador++) {
    mediaAritmetica4 += (numbers4[contador]) / tamanhoArray4
}

if (mediaAritmetica4 > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}

//5 - Resposta /Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers5 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor;

for (let contador = 0; contador < numbers5.length; contador++) {
    if (numbers5[contador] > numbers5[contador]) {
        maiorValor = numbers5[contador];
    }
}

console.log(maiorValor);

