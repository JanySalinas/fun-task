// This is  the task i got from my teacher! where the task asked me to make class for Songs, Playlist and User. So as you can see above i made the classes.
//CHECK CONSOLE WITH THIS TASK.

// CREATE THE CLASSES HEREC
class Song {
    constructor(title, duration, artist, album, genre) {
        this.title = title;
        this.duration = duration;
        this.artist = artist;
        this.album = album;
        this.genre = genre;
    }
    getSongDetails() {
        return `song: ${this.title}\nartist: ${this.artist}\nalbum: ${this.album}\ngenre: ${this.genre}\nDuration: ${this.duration}s`;
    }
}

// PLAYLIST
class Playlist {
    constructor(createdBy, playlistName, createdAt, songs = []) {
        this.createdBy = createdBy;
        this.playlistName = playlistName;
        this.createdAt = createdAt;
        this.songs = songs;
    }

    addSong(song) {
        if (this.songs.some(s => s.title === song.title)) {
            console.log(`Song ${song.title} already exists in this playlist.`);
        } else {
            this.songs.push(song);
        }
    }

    removeSong(song) {
        this.songs = this.songs.filter(s => s.title !== song.title);
    }

    getSongs() {
        return this.songs;
    }

    getTotalDuration() {
        return this.songs.reduce((total, song) => total + song.duration, 0);
    }

    displaySongs() {
        console.log(`Playlist: ${this.playlistName}`);
        console.log(`Created By: ${this.createdBy.userName}`);
        console.log(`Created At: ${this.createdAt}`);
        console.log(`Total Duration: ${this.getTotalDuration()} seconds`);
        console.log("Songs:");
        this.songs.forEach((song, index) => {
            console.log(`${index + 1}.\n${song.getSongDetails()}\n`);
        });
    }
}

// USER
class User {
    constructor(userName, createdAt, playlists = []) {
        this.userName = userName;
        this.createdAt = createdAt;
        this.playlists = playlists;
    }

    addPlaylist(playlist) {
        this.playlists.push(playlist);
    }

    removePlaylist(playlist) {
        this.playlists = this.playlists.filter(p => p.playlistName !== playlist.playlistName);
    }

    getPlaylists() {
        return this.playlists;
    }
}


// Provided demo data (remove /* and */ to test your classes)
// Example Songs
const song1 = new Song("Billie Jean", 294, "Michael Jackson", "Thriller", "Pop");
const song2 = new Song("Bohemian Rhapsody", 354, "Queen", "A Night at the Opera", "Rock");
const song3 = new Song("Lose Yourself", 326, "Eminem", "8 Mile", "Rap");
const song4 = new Song("Shape of You", 263, "Ed Sheeran", "Divide", "Pop");
const song5 = new Song("Hotel California", 391, "Eagles", "Hotel California", "Rock");
const song6 = new Song("Blinding Lights", 200, "The Weeknd", "After Hours", "Synthwave");
const song7 = new Song("Humble", 177, "Kendrick Lamar", "DAMN.", "Rap");
const song8 = new Song("Uptown Funk", 269, "Mark Ronson ft. Bruno Mars", "Uptown Special", "Funk");
const song9 = new Song("Stairway to Heaven", 482, "Led Zeppelin", "Led Zeppelin IV", "Rock");
const song10 = new Song("Shallow", 216, "Lady Gaga & Bradley Cooper", "A Star is Born", "Pop");
const song11 = new Song("Smells Like Teen Spirit", 301, "Nirvana", "Nevermind", "Grunge");
const song12 = new Song("Rolling in the Deep", 228, "Adele", "21", "Pop");
const song13 = new Song("Voodoo", 205, "Patrick Paige II", "Letters of Irrelevance", "R&B");
const song14 = new Song("Bara Vara Med Varandra", 210, "Broder John & Friman", "Mauro", "Hip & Hop");
const song15 = new Song("Change On Me", 205, "Xavier Omär", "Pink Lightning -EP", "R&B/SOUL");
const song16 = new Song("Blind Man", 210, "Xavier Omär", "The Everlastin Wave", "R&B/SOUL");
const song17 = new Song("Piece of My Heart", 215, "Wizkid ft Brent Faiyaz", "Singel-EP", "R&B");





// Create a User
const user = new User("MrWorldWide", new Date(), []);

// Create a Playlist
const playlist = new Playlist(user, "🌞Good Vibes🌞", new Date(), []);

// Add songs to the playlist
playlist.addSong(song1);
playlist.addSong(song2);
playlist.addSong(song3);
playlist.addSong(song4);
playlist.addSong(song5);
playlist.addSong(song6);
playlist.addSong(song14);


// Display songs in the playlist
playlist.displaySongs();

const user2 = new User("MusicLover", new Date(),[]);

const playlist2 = new Playlist(user2, "🤠Chill Laid Back Tunes🤠", new Date(), []);

playlist2.addSong(song17);
playlist2.addSong(song16);
playlist2.addSong(song13);
playlist2.addSong(song15);
playlist2.addSong(song14);

playlist2.displaySongs();

// so as you can see i made to user, and two different playlists and added a few new songs