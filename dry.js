function saudacaoRoss() {
    return "Olá, Ross! Bem-vindo(a) ao Central Perk, o café mais amigável de Nova York!";
  }
  
  function saudacaoRachel() {
    return "Olá, Rachel! Bem-vindo(a) ao Central Perk, o café mais amigável de Nova York!";
  }
  
  const mensagem1 = saudacaoRoss();
  const mensagem2 = saudacaoRachel();
  
  console.log(mensagem1); // Saída: "Olá, Ross! Bem-vindo(a) ao Central Perk, 
  //o café mais amigável de Nova York!"
  console.log(mensagem2); // Saída: "Olá, Rachel! Bem-vindo(a) ao Central Perk, o 
  //café mais amigável de Nova York!"

//   Neste exemplo, temos duas funções separadas, uma para saudar "Ross" e outra 
//   para saudar "Rachel". Isso não segue o princípio DRY, pois há repetição de código sem necessidade.
//   A segunda versão, sem DRY, requer a criação de uma função separada para cada personagem, o que 
//   pode se tornar trabalhoso e confuso quando houver muitos personagens.


function saudacaoFriends(nome) {
    return `Olá, ${nome}! Bem-vindo(a) ao Central Perk, o café mais amigável de Nova York!`;
}
  
const mensagems1 = saudacaoFriends("Ross");
const mensagems2 = saudacaoFriends("Rachel");

console.log(mensagem1); // Saída: "Olá, Ross! Bem-vindo(a) ao Central Perk, o café mais amigável de Nova York!"
console.log(mensagem2); // Saída: "Olá, Rachel! Bem-vindo(a) ao Central Perk, o café mais amigável de Nova York!"

//   Neste exemplo, a função saudacaoFriends é reutilizável e segue o princípio DRY, 
//   pois permite saudar qualquer personagem de "Friends" de forma genérica.
  