class Episode {
  constructor(title, duration) {
    this.title = title;
    this.duration = duration;
  }
}

class Series {
  constructor(name) {
    this.name = name;
    this.episodes = [];
  }

  addEpisode(episode) {
    this.episodes.push(episode);
  }

  getTotalDuration() {
    return this.episodes.reduce((total, episode) => total + episode.duration, 0);
  }
}

class FriendsEpisode extends Episode {
  constructor(title, duration, season, episodeNumber) {
    super(title, duration);
    this.season = season;
    this.episodeNumber = episodeNumber;
  }
}

// Criando uma instância da série "Friends"
const friendsSeries = new Series('Friends');

// Adicionando episódios de "Friends"
friendsSeries.addEpisode(new FriendsEpisode('The One Where Monica Gets a Roommate', 22, 1, 1));
friendsSeries.addEpisode(new FriendsEpisode('The One with the Sonogram at the End', 22, 1, 2));
// Adicione mais episódios conforme necessário...

// Calculando a duração total de "Friends"
const totalDurationOfFriends = friendsSeries.getTotalDuration();
console.log(`Duração total de "Friends": ${totalDurationOfFriends} minutos`);


// Criamos uma classe Episode para representar episódios genéricos de séries.
// Criamos uma classe Series para representar séries de TV, permitindo que você 
// adicione episódios a elas.
// A classe FriendsEpisode estende a classe Episode e adiciona informações específicas dos 
// episódios de "Friends", como temporada e número do episódio.
// Esse código segue o OCP, pois você pode adicionar facilmente informações sobre episódios 
// de outras séries criando novas classes que estendem Episode sem precisar modificar o código 
// existente na classe Series.

// Isso demonstra como o OCP permite que você estenda o comportamento do sistema 
// (adicionar informações sobre outras séries) sem modificar o código existente, 
// tornando seu sistema mais aberto para extensão e fechado para modificação.