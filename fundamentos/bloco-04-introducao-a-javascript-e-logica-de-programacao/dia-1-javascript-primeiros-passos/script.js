//Variaveis
// let, const, var

const myName = 'Frederico';
const birthCity = 'Belo Horizonte';
const birthYear = 1992;
console.log('Meu nome é: ' + myName + ' nasci na cidade: ' + birthCity + ' sou do ano de: ' + birthYear);

birthCity = 2023;
console.log(birthCity);

/*  
    TypeError: Assignment to constant variable.
    Uma constante é um valor que não pode ser alterado pelo programa durante a execução normal. 
    Ele não pode mudar através de reatribuição e não pode ser redeclarado. Em JavaScript, 
    as constantes são declaradas usando a palavra-chave const.
    font: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Errors/Invalid_const_assignment
*/

//Tipos Primitivos, Tipagem dinâmica e Operações Aritméticas
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);

console.log(typeof patientAge); //undefined

/*  ReferenceError: patientAge is not defined
    A variavel patientAge não está declarada, desta forma ela é indefinida e
    será apresentado um erro ao tentar executar o codigo.
 */

    let patientAge = 50;
    console.log(typeof patientAge); //number

    patientAge = '50';
    console.log(typeof patientAge); //string [tudo que estiver entre aspas é string para javascript]

    //if / else

    const nota = 88;
    if (nota >= 80){
        console.log('Parabéns, você foi aprovada(o)!');
    } else if (nota < 79 && nota >= 60){
        console.log('Você está na nossa lista de espera');
    } else  {
        console.log('Você foi reprovada(o)');
    }

    //OPERADORES LOGICOS
    const cenouras = true;
    const leite = true;
    const arroz = true;
    const feijao = true;
    
    const listaDeCompras = cenouras && leite && arroz && feijao;

    console.log(listaDeCompras);

    //Operador AND
    /* 
        console.log(true && true); // true
        console.log(true && false); // false
        console.log(false && true); // false
        console.log(false && false); // false
    */
//menor valor é 4
//maior é 24
const currentHour = 21;
let message = '';

if(currentHour >= 22){
    message = 'Não deveríamos comer nada, é hora de dormir';
} else if(currentHour >= 18 && currentHour < 22){
    message = 'Rango da noite, vamos jantar :D';
} else if (currentHour >=15 && currentHour < 18){
    message = 'Vamos fazer um bolo pro café da tarde?';
} else if (currentHour >= 11 && currentHour <=14){
    message = 'Hora do almoço!!!';
} else {
    message = 'Hmmm, cheiro de café recém passado';
}

console.log(message);

//Operador OR
/* 
    console.log(true || true); // true
    console.log(true || false); // true
    console.log(false || true); // true
    console.log(false || false); // false
*/

let weekDay = 'domingo';

if(weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feria'){
    console.log('Oba, mais um dia de aprendizado na Trybe >:D');
} else {
    console.log('FINALMENTE, descanso merecido UwU');
}

//Operador NOT


//Switch -- case
let candidato = 'lista';

switch(candidato){
    case 'aprovado':
        console.log('Parabéns, você foi Aprovado!');
        break
    case 'lista':
        console.log('Lista de espera.');
        break
    case 'reprovado':
        console.log('Reprovado :(');
        break
    default:
        console.log('Não se aplica!')
}