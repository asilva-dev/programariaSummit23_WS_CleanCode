// verificacaoRelacoes.js
function verificaRelacaoPersonagens(relacoes, personagem1, personagem2, tipoRelacao) {
    const relacaoEncontrada = relacoes.find((relacao) => {
      return (
        (relacao.personagem1 === personagem1 && relacao.personagem2 === personagem2) ||
        (relacao.personagem1 === personagem2 && relacao.personagem2 === personagem1)
      );
    });
  
    return !!relacaoEncontrada && relacaoEncontrada.tipo === tipoRelacao;
  }
  
  module.exports = verificaRelacaoPersonagens;
  