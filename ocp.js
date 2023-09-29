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

  const friendsSeries = new Series('Friends');
  
  friendsSeries.addEpisode(new FriendsEpisode('The One Where Monica Gets a Roommate', 22, 1, 1));
  friendsSeries.addEpisode(new FriendsEpisode('The One with the Sonogram at the End', 22, 1, 2));
 
  const totalDurationOfFriends = friendsSeries.getTotalDuration();
  console.log(`Duração total de "Friends": ${totalDurationOfFriends} minutos`);
