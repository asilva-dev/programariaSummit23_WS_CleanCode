function assistirSerieFriends(serie, episodio) {
  if (serie === "Friends") {
    console.log(`Assistindo ao episódio ${episodio} de Friends.`);
    reproduzirEpisodio(episodio);
  } else {
    console.log("Desculpe, esta função só funciona com Friends.");
  }
}

function reproduzirEpisodio(episodio) {
  console.log(`Reproduzindo o episódio ${episodio}.`);
  // Lógica para reproduzir o episódio vai aqui...
}

// Neste exemplo, a função assistirSerieFriends tem duas 
// responsabilidades: verificar se a série é "Friends" e, em seguida, reproduzir o episódio.

function assistirEpisodioFriends(episodio) {
  console.log(`Assistindo ao episódio ${episodio} de Friends.`);
}

function reproduzirEpisodio(episodio) {
  console.log(`Reproduzindo o episódio ${episodio}.`);
  // Lógica para reproduzir o episódio vai aqui...
}

// A função assistirEpisodioFriends agora lida apenas com a ação de assistir a um 
// episódio de "Friends".
// A função reproduzirEpisodio continua a lidar com a reprodução de um episódio,
// como sua única responsabilidade.
