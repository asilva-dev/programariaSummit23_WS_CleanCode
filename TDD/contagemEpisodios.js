function contarEpisodiosPorPersonagem(episodios) {
    const contagemDeAparicoesPorPersonagem = {};
    episodios.forEach((episodio) => {
      if (!contagemDeAparicoesPorPersonagem[episodio.nome]) {
        contagemDeAparicoesPorPersonagem[episodio.nome] = 0;
      }
      contagemDeAparicoesPorPersonagem[episodio.nome] += episodio.apareceu;
    });
    return contagemDeAparicoesPorPersonagem;
  }
  
  module.exports = contarEpisodiosPorPersonagem;
  