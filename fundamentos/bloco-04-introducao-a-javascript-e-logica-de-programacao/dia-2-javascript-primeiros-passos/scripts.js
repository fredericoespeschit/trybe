/* 
    Você será capaz de:
    Manipular arrays (listas);
    Utilizar o comando for;
*/

//Criar um Array
let pizza = ['4 Queijos', 'Frango com Catupiry', 'Marguerita', 'Palmito', 'Chocolate'];
    //indice: 0,             1,                  ,  2          ,  3        ,  4
/*
    pizza[5] = 'Peito de Peru'; //adicionando valor no Array
    pizza.push('Frango'); //Adiciona um valor na ultima posição do Array
    pizza.unshift('Portuguesa'); //Adiciona um valor na primeira posição do Array
    pizza.pop(); //Remove o ultimo item do array
    pizza.shift(); //Remove o primeiro item do array
    pizza.length; //Exibe o tamanho do meu array
    pizza.sort(); //Ordena em ordem alfabetica o array
    pizza.[]; //exibe uma posição especifica do array 
    console.log(pizza); //Exibe os valores que estão dentro do Array
*/

for (let index = 0; index < pizza.length; index += 1) {
    //console.log(pizza); //Exibe o array, na mesma quantidade de elementos existentes
    console.log(pizza[index]); //Exibe os elementos do array, 1 unica vez
}
console.log('Primeiro elemento: ' + pizza[0]); //Exibe o primeiro elemento do Array
console.log('Ultimo elemento: ' + pizza[pizza.length - 1]); //Exibe o ultimo elemento do Array
console.log(pizza.indexOf('Marguerita')); //procurar o índice de um item no Array, ou seja a posição que se encontra no array
 // Calabresa, Portuguesa, Muçarela, Carne seca com banana

 //Obtenha o valor "Serviços" do array menu:
 let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
 let menuServicos = menu[1]; //Retornando passando o indice do elemento
 console.log(menuServicos);

 //Procure o índice do valor "Portfólio" do array menu:

 let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
 let menuServicos2 = menu2.indexOf('Portfólio');
 console.log(menuServicos2);

 //Adicione o valor "Contato" no final do array menu:
 let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];
 let menuServicos3 = menu3.push('Contato');
 console.log(menu3);


 //Estrutura de repetição FOR
 //Utilize o for para imprimir os elementos da lista groceryList com o console.log():
 let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
 for(let indice = 0; indice < groceryList.length; indice = indice + 1){
    //console.log(groceryList); //Imprime o Array, na quantidade de elementos existentes
    console.log(groceryList[indice]); //Imprime cada indice e o seu elemento
    //console.log(indice); //Imprime os indices do array
    //console.log(groceryList.length); //Imprime o tamanho do array
 }

 //For-Of
 let almoçoList = ['Arroz', 'Feijão', 'Alface', 'Macarrão', 'Tomate'];
 for(let comida of almoçoList){
    console.log(comida)
 }

 //Utilize o for/of para imprimir os elementos da lista names com o console.log():
 let names = ['João', 'Maria', 'Antônio', 'Margarida'];

 for (let name of names){
    console.log(name);
 }

 //****Entender melhor a diferença entre usar o For e usar o for-Of


  