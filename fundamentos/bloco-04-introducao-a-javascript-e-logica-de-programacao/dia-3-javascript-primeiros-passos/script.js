// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
//A soma total de 1 a 50 é:


let soma = 0;
for (let index = 1; index <= 50; index++) {
    soma += index;
}

console.log(soma);


//2 -
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
let num = 0;
for (let index = 2; index <= 150; index++) {
    if (index % 3 === 0) {
        num += 1;
    }
}

if (num === 50) {
    console.log('São ' + num + ' divisiveis');
}

// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

/* 
    Pedra ganha da Tesoura 
    Tesoura ganha do Papel 
    Papel ganha da Pedra 
*/

let jogador1 = 'Papel';
let jogador2 = 'Papel';

if (jogador1 == 'Pedra' && jogador2 == 'Tesoura') {
    console.log('Player 1 won');
} else if (jogador1 == 'Tesoura' && jogador2 == 'Papel') {
    console.log('Player 1 won');
} else if (jogador1 == 'Papel' && jogador2 == 'Pedra') {

} else if (jogador1 == jogador2) {
    console.log('A Ties');
} else {
    console.log('Player 2 won');
}


//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

let idade = 17;

if (idade >= 18) {
    console.log(true);
} else {
    console.log(false);
}


// 5 
//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let arrayIdade = [10, 20, 3];
let maisNova = arrayIdade[0];
for(let i = 0; i < arrayIdade.length; i++){
    if (arrayIdade[i] < maisNova) {
        maisNova = arrayIdade[i];
      }
}
console.log(maisNova);
