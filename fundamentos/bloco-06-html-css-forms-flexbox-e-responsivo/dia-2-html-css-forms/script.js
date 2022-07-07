const BUTTON = document.querySelector('#buttonSubmit');
const CHECKBOX_DOIS = document.querySelector('#checkbox-2');

function buttonSubmit(eventButtonSubmit){
    eventButtonSubmit.preventDefault();
}
BUTTON.addEventListener('click', buttonSubmit);

function checkboxDois (){
    console.log(CHECKBOX_DOIS);
}
CHECKBOX_DOIS.addEventListener('click', checkboxDois);