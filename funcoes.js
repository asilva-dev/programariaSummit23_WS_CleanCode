function calcularMediaEpisodiosTemporada(episodios) {
    let somaDuracao = 0; 
    let contador = 0;
  
    for (let i = 0; i < episodios.length; i++) {
      const episodio = episodios[i];
      somaDuracao += episodio.duracao; 
      contador++; 
    }
  
    const media = somaDuracao / contador; 
    return media; 
}

function calcularMediaDuracaoEpisodios(temporadaFriends) {
  let somaDuracaoTotal = 0; // Inicializa a soma da duração total
  let numeroEpisodios = 0; // Inicializa o número de episódios na temporada

  for (let i = 0; i < temporadaFriends.length; i++) {
    const episodio = temporadaFriends[i]; // Obtém cada episódio da temporada
    somaDuracaoTotal += episodio.duracao; // Soma a duração do episódio
    numeroEpisodios++; // Incrementa o número de episódios
  }

  const mediaDuracaoEpisodios = somaDuracaoTotal / numeroEpisodios; // Calcula a média
  return mediaDuracaoEpisodios; // Retorna a média da duração dos episódios
}