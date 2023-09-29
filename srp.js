function calcularMediaDuracaoEpisodios(temporadaFriends) {
    let somaDuracaoTotal = 0; 
    let numeroEpisodios = 0; 
  
    for (let i = 0; i < temporadaFriends.length; i++) {
      const episodio = temporadaFriends[i]; 
      somaDuracaoTotal += episodio.duracao; 
      numeroEpisodios++; 
  
    const mediaDuracaoEpisodios = somaDuracaoTotal / numeroEpisodios;
    return mediaDuracaoEpisodios;
}
  




  