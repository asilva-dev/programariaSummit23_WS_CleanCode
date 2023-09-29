// verificacaoRelacoes.test.js
const verificaRelacaoPersonagens = require('./verificacaoRelacoes');

test('verifica se há uma relação entre personagens de Friends', () => {
  const relacoes = [
    { personagem1: 'Ross', personagem2: 'Rachel', tipo: 'casal' },
    { personagem1: 'Monica', personagem2: 'Chandler', tipo: 'casal' },
    { personagem1: 'Joey', personagem2: 'Phoebe', tipo: 'amigos' },
  ];

  const resultadoCasal = verificaRelacaoPersonagens(relacoes, 'Ross', 'Rachel', 'casal');
  const resultadoAmigos = verificaRelacaoPersonagens(relacoes, 'Joey', 'Phoebe', 'amigos');
  const resultadoNaoRelacionados = verificaRelacaoPersonagens(relacoes, 'Ross', 'Chandler', 'casal');

  expect(resultadoCasal).toBe(true); 
  expect(resultadoAmigos).toBe(true); 
  expect(resultadoNaoRelacionados).toBe(false);
});

