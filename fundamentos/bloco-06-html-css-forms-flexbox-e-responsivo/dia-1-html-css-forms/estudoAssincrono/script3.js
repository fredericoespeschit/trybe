const botao = document.querySelector('#buttonSubmit');
let inputNameUser = document.querySelector('#inputNameUser');
const nameUser = document.querySelector('#nameUser');


function getUserValue(event){
    event.preventDefault();
    console.log(inputNameUser.value);
    nameUser.innerHTML = inputNameUser.value;
   
}
botao.addEventListener('click', getUserValue);