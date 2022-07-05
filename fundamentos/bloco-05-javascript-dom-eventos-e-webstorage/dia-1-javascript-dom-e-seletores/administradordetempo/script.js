//getElementBy e querySeletor
let headerContainer = document.getElementById('header-container');
headerContainer.style.background = 'green';

let emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.background = '#fc9e84';

let emergencyTasksElements = document.querySelectorAll('.emergency-tasks div h3');
for(let index = 0; index < emergencyTasksElements.length; index += 1){
    emergencyTasksElements[index].style.background = '#ab7ef3';
}

let noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTasks.style.background = '#f9db5e';

let noEmergencyTasksElements = document.querySelectorAll('.no-emergency-tasks div h3');
//#222525
for(let i = 0; i < noEmergencyTasksElements.length; i +=1){
    noEmergencyTasksElements[i].style.background = '#222525';
}

let footerContainer = document.getElementById('footer-container');
footerContainer.style.background = '#083534';
//#083534