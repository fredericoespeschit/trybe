//1 - Resposta
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };


  console.log('Bem-vinda, ' + info.personagem);

//2 - Resposta

  info['recorrente'] = 'Sim';
  console.log(info['recorrente'])

//3 - Resposta
for(let key in info){
  console.log(key);
}

//4 - Resposta

for(let chave in info){
  console.log(info[chave]);
}

//5 - Resposta [Reler e entender a questão]

//6 - Resposta
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);
//O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'"

//7 - Resposta
leitor.livrosFavoritos[0]['titulo'] = 'Harry Potter e o Prisioneiro de Azkaban';
leitor.livrosFavoritos[0]['autor'] = 'JK Rowling';
leitor.livrosFavoritos[0]['editora'] = 'Rocco';

console.log(leitor.livrosFavoritos[0]);