/*
Window: Representa uma janela que contém um elemento DOM, sendo possível acessar o documento que a janela contém através de Window;
location: Representa a localização do objeto a qual ele está associado, isso é, o documento atual;
document: Representa qualquer página da web carregada no navegador e serve como um ponto de entrada para o conteúdo na página da web, sendo assim o document contém todos os documentos HTML;
history: Permite a manipulação do histórico da sessão do navegador, ou seja, as páginas visitadas na guia ou quadro em que a página atual está carregada;
element: É a classe base mais geral da qual todos os objetos em um Document herdam, isso é, são todas as tags que estão em arquivos HTML e se transformam em elementos da árvore DOM;
text: Texto que vai entre os elementos, é todo o conteúdo das tags;
atribute: São todos os atributos que um nó específico possui, como uma class ou id.
*/

const paragraph = document.getElementById('paragraph');
paragraph.style.color = 'red';

//Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
const pageTitle = document.getElementById('page-title').innerText = "Rei Leão I";

//Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
const secondParagraph = document.getElementById('second-paragraph').innerText = "Irmão Urso I";

//Por fim, recupere o subtítulo e altere-o também.
const subtitle = document.getElementById('subtitle').innerText = "Irmão Urso II";

//getElementsByClassName/getElementsByTagName
//Adicione uma classe igual para os dois parágrafos.
//class="paragraphClass"
//Recupere os seus parágrafos via código JavaScript, usando a função getElementsByClassName;

let paragraphClass = document.getElementsByClassName('paragraphClass');

for(let index = 0; index < paragraphClass.length; index += 1){
    paragraphClass[index].innerText = 'Exercicio 2'
}

//Altere algum estilo do primeiro deles.
let nomeDaTag = document.getElementsByTagName("h2");

for(let i = 0; i < nomeDaTag.length; i+=1){
    nomeDaTag[i].style.color = 'red';
}

//Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.