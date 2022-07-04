/*
Você será capaz de:
Manipular objetos;
Utilizar os comandos for/in e for/of;
Utilizar funções para organizar e estruturar o seu código;
*/

//Declarando um Objeto
let pessoa = {
    nome: 'Frederico',
    sobrenome: 'Espeschit',
    idade: 29,
    viagens: ['Minas Gerais', 'São Paulo', 'Rio de Janeiro'],
    informacaoExtra: {
        cidade: 'Belo Horizonte',
        estado: 'Minas Gerais'
    }
};

//Acessando informações do objeto
//Primeira maneira, notação de ponto: pessoa.nome
console.log(pessoa.nome);

//Segunda forma é notação de colchetes: pessoa['sobrenome']
console.log(pessoa['sobrenome']);

//Criar uma propriedade no objeto
pessoa['nomeCompleto'] = pessoa.nome + ' ' + pessoa.sobrenome;
console.table(pessoa);

//Acessar propriedade de um objeto dentro de outro objeto
console.log(pessoa.nome + ' nasceu em: ' + pessoa.informacaoExtra.cidade)


let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
  };
  
  //diasDaSemana.1; // SyntaxError: Unexpected number
  //No código acima, ocorre um erro por usar notação de ponto ao invés de notação de colchetes com uma propriedade nomeada com número.
  console.log(diasDaSemana['1']); // domingo

  let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };


  let infoDoBanco = 'banco';
  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
  console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
  console.log(conta.agencia); // 0000
  console.log(conta['agencia']); // 0000
  
  console.log(conta.banco.cod); // 012
  console.log(conta['banco']['id']); // 4
  
  //For-In
  //Objetos 

  let pizzas = {
    sabor: 'Portuguesa',
    tamanho: 'P',
    preco: 39.90,
    bordaRecheada: true
  };

  for(let key in pizzas){
    console.log(key); //Retorna as chaves/keys, que no caso é 'sabor, tamanho, preco, bordaRecheada'
    console.log(pizzas); //Retorna os valores, "portuguesa, P, 39.90 e true"
  }
  //Array
  let pizzasDoces = ['Banana com chocolate', 'Morango com Chocolate'];

  for(let indice in pizzasDoces){
    console.log(indice);
    console.log(pizzasDoces);
  }

  //Para fixar!
//1
  let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge'
  };

  for(let key in names){
    console.log('Olá ' + names[key]);
  }

//2
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for(let key in car){
    console.log(key, car[key]);
}

