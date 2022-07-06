let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
elementoOndeVoceEsta.parentNode.style.color = 'red';

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho').innerText = 'Primeiro Filho do Filho';

let pai = document.getElementById('pai');
console.log(pai.firstChild);
//firstChild


//Adicionar elemento ao HTML através do Javascript com a função appendChild()
//Criando elemento dinamico no HTML através da função createElement()

let ingredientesItems = [
    '500g de feijão carioquinha cozido',
    '200g de toucinho',
    '1 concha de oleo',
    '1 cebola média picada',
    '4 dentes de alho',
    '5 ovos',
    '1 colher de sopa de sal com alho',
    'cheiro verde a gosto',
    '200g de farinha de mandioca'

]
let ingredientesList = document.querySelector('.ingredientes-list');
for(let index = 0; index < ingredientesItems.length; index+=1){
    let ingredient = ingredientesItems[index];
    let ingredientListItem = document.createElement('li');
    ingredientListItem.innerText = ingredient;
    ingredientListItem.className = 'ingredientes-list-item';

    ingredientesList.appendChild(ingredientListItem);
}

//Remover elementos com javascript utilizando a função 
let ingredientListItems = document.querySelectorAll('.ingredientes-list-item');
for(let i = 0; i < ingredientListItems.length; i +=1){
    let element = ingredientListItems[i];

    if(element.innerText.includes('toucinho')){
        ingredientesList.removeChild(element);
    }
}


