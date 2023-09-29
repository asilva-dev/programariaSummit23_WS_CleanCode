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