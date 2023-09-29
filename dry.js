function saudacaoRoss() {
    return "Olá, Ross! Bem-vindo(a) ao Central Perk, o café mais amigável de Nova York!";
}
  
function saudacaoRachel() {
    return "Olá, Rachel! Bem-vindo(a) ao Central Perk, o café mais amigável de Nova York!";
}

const mensagem1 = saudacaoRoss();
const mensagem2 = saudacaoRachel();

console.log(mensagem1); 
console.log(mensagem2); 

function saudacaoFriends(nome) {
    return `Olá, ${nome}! Bem-vindo(a) ao Central Perk, o café mais amigável de Nova York!`;
}
  
const mensagens1 = saudacaoFriends("Ross");
const mensagens2 = saudacaoFriends("Rachel");

console.log(mensagem1); 
console.log(mensagem2); 