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
const personagemRuim2 = new PersonagemFriendsRuim("Rachel", 29, "Balconista");

console.log(personagemRuim.saudacaoRoss()); 
console.log(personagemRuim2.saudacaoRachel());