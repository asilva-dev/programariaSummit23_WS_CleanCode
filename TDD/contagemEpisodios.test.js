const contarEpisodiosPorPersonagem = require('./contagemEpisodios'); // Vamos criar esta função posteriormente

test('conta o número de episódios em que cada personagem de Friends apareceu', () => {
  const episodios = [
    { nome: 'Ross', apareceu: 50 },
    { nome: 'Rachel', apareceu: 52 },
    { nome: 'Joey', apareceu: 48 },
    { nome: 'Monica', apareceu: 53 },
  ];

  const resultado = contarEpisodiosPorPersonagem(episodios);

  // A contagem esperada para Ross é 50, para Rachel é 52, para Joey é 48 e para Monica é 53
  expect(resultado).toEqual({
    Ross: 50,
    Rachel: 52,
    Joey: 48,
    Monica: 53,
  });
});
