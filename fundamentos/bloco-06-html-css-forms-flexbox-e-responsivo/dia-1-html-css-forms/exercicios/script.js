const BUTTON = document.querySelector('#buttonSubmit');

function buttonSubmit(eventButtonSubmit){
    eventButtonSubmit.preventDefault();
}
BUTTON.addEventListener('click', buttonSubmit);