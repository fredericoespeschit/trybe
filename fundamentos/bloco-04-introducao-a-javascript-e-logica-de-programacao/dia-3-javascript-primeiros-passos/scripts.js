//1 - Resposta
//O fatorial é representado pelo sinal !
//4! = 4 x 3 x 2 x 1 = 24
// < menor
// > maior
// 3628800

let result = 1;
for (let index = 10; index > 0; index--) {
    result = result * index;
} 
console.log(result);



//2 - Resposta
//let word = 'tryber';

let word = 'tryber';
let r = '';
for (let i = 0; i < word.length; i++) {
    r += word[word.length - 1 - i];
}
console.log(r);

//3 - Resposta
let array = ['java', 'javascript', 'python', 'html', 'css'];
let menor = array[0];
let maior = array[0];

for (let i = 0; i < array.length; i += 1) {
    //console.log(array[i])
    if (array[i] < menor) {
        menor = array[i];
    }
}

for (let j = 0; j < array.length; j++) {
    //console.log(array[j])
    if (array[j].length > maior.length) {
        maior = array[j];
    }
}
console.log('Menor: ' + menor);
console.log('Maior: ' + maior);

//4 - Resposta
//é divisível por 1 e por ele mesmo

let numero = 7;
if(numero / numero && numero / 1){
    console.log('É primo')
} else {
    console.log('Não é primo')
}