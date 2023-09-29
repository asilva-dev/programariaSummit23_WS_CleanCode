// Classe com código ruim
class PersonagemFriendsRuim {
  constructor(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }

  saudacaoRoss() {
    return `Olá, eu sou ${this.nome} de Friends. Tenho ${this.idade} anos e trabalho como ${this.profissao}.`;
  }

  saudacaoRachel() {
    return `Olá, eu sou ${this.nome} de Friends. Tenho ${this.idade} anos e trabalho como ${this.profissao}.`;
  }
}

// Uso da classe com código ruim
const personagemRuim = new PersonagemFriendsRuim("Ross", 32, "Paleontólogo");

console.log(personagemRuim.saudacaoRoss()); // Saída: "Olá, eu sou Ross de Friends. Tenho 32 anos e trabalho como Paleontólogo."
console.log(personagemRuim.saudacaoRachel()); // Saída: "Olá, eu sou Ross de Friends. Tenho 32 anos e trabalho como Paleontólogo."


// A classe não segue os princípios do Clean Code:

// Coesão: A classe tem mais de uma responsabilidade, fornecendo métodos separados para saudar
//  personagens diferentes.
// Acoplamento: A classe está acoplada a personagens específicos, o que a torna menos flexível e 
// difícil de manter.
// Abstração: A classe não abstrai as características comuns de um personagem de "Friends"; em vez 
// disso, fornece métodos separados para cada personagem.
// // Encapsulamento: A classe não encapsula os atributos, tornando-os acessíveis diretamente.
// O exemplo demonstra um código menos organizado e mais difícil de manter devido à falta de coesão,
// acoplamento excessivo e falta de abstração.

// Classe que segue os princípios do Clean Code
class PersonagemFriends {
  constructor(nome, idade, profissao) {
    this.nome = nome; // Encapsulamento: Atributos privados
    this.idade = idade; // Encapsulamento: Atributos privados
    this.profissao = profissao; // Encapsulamento: Atributos privados
  }

  saudacao() {
    return `Olá, eu sou ${this.nome} de Friends. Tenho ${this.idade} anos e trabalho como ${this.profissao}.`;
  }
}

// Uso da classe
const ross = new PersonagemFriends("Ross", 32, "Paleontólogo");
const rachel = new PersonagemFriends("Rachel", 29, "Gestora de Moda");

console.log(ross.saudacao()); // Saída: "Olá, eu sou Ross de Friends. Tenho 32 anos e trabalho como Paleontólogo."
console.log(rachel.saudacao()); // Saída: "Olá, eu sou Rachel de Friends. Tenho 29 anos e trabalho como Gestora de Moda."


// Coesão: A classe tem uma única responsabilidade, que é representar um personagem de "Friends".
// Acoplamento: A classe não depende de outras classes, tornando-a independente e de fácil manutenção.
// Abstração: A classe abstrai as características comuns de um personagem de "Friends" (nome, idade, profissão) e oferece um método saudacao para fornecer uma saudação personalizada.
// Encapsulamento: Os atributos são encapsulados como propriedades privadas da classe.