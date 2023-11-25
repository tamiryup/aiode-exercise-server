
export class Track {
    private id?: number; // Marking id as optional since it will be undefined until saved to the database
    private title: string;
    private artist: string;
    private genre: string;
  
    constructor(title: string, artist: string, genre: string, id?: number) {
      this.title = title;
      this.artist = artist;
      this.genre = genre;
      this.id = id;
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getArtist() {
        return this.artist;
    }

    getGenre() {
        return this.genre;
    }
    
  }