function contarEpisodiosPorPersonagem(episodios) {
    const contagem = {};
    episodios.forEach((episodio) => {
      if (!contagem[episodio.nome]) {
        contagem[episodio.nome] = 0;
      }
      contagem[episodio.nome] += episodio.apareceu;
    });
    return contagem;
  }
  
  module.exports = contarEpisodiosPorPersonagem;
  