//1- Resposta
const a = 10;
const b = 50;

//Adição
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//2- Resposta
const c = 500;
const d = 700;

if(c > d){
    console.log('C é maior que D')
} else {
    console.log('D é maior que C')
}

//3 - Resposta
const e = 500;
const f = 6000;
const g = 700;

if(e > f && e > g){
    console.log(e)
} else if(f > e && f > g){
    console.log(f)
} else {
    console.log(g)
}

//4 - Resposta
//positivo: 1, 2, 3, 4...
//negativo: -1, -2, -3, -4...
//zero: 0

const h = 0;

if(h < 0){
    console.log("negative")
} else if(h > 0){
    console.log("positive")
} else {
    console.log("zero")
}

//5 - Resposta
const ladoa = 10;
const ladob = 20;
const ladoc = 160;

const triangulo = ladoa + ladob + ladoc;
if(ladoa < 0 || ladob < 0 || ladoc < 0){
    console.log("Invalido")
} else if(triangulo == 180){
    console.log(true)
} else if(triangulo != 180){
    console.log(false)
} 


//6 - Resposta
/* 
    rei
    rainha ou dama
    bispos
    cavalos
    torres
    peões
*/

const pecaDeXadrez = 'CAVALO';

switch (pecaDeXadrez.toLowerCase()){
    case 'rei':
        console.log('O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.');
        break
    case 'rainha':
        console.log('A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.');
        break
    case 'bispos':
        console.log('O bispo move-se ao longo da diagonal. Não pode pular outras peças.');
        break
    case 'cavalo':
        console.log('É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.');
        break
    case 'torres':
        console.log('A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.');
        break
    case 'peoes':
        console.log('O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.');
        break

    default:
        console.log('Peça inexistente');
}

//7 - Resposta

const nota = 95;

if (nota < 0 || nota >= 100) {
    console.log('Conceito indisponivel')
} else if (nota >= 90){
    console.log('A');
} else if (nota >= 80){
    console.log('B');
} else if (nota >= 70){
    console.log('C');
} else if (nota >= 60){
    console.log('D');
} else if (nota >= 50) {
    console.log('E');
} else if( nota < 49){
    console.log('F');
} 