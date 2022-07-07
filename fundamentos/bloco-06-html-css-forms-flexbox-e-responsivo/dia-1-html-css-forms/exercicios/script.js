const BUTTON = document.querySelector('#buttonSubmit');
const BUTTON_CLEAR = document.querySelector('#buttonSubmitClear');

function buttonSubmit(eventButtonSubmit){
    eventButtonSubmit.preventDefault();
}
BUTTON.addEventListener('click', buttonSubmit);
BUTTON_CLEAR.addEventListener('click', buttonSubmit)