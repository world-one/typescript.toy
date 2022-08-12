class Song {
  name;
  nextSong;

  constructor(name) {
    this.name = name;
  }

  /**
   * @return {boolean} true if the playlist is repeating, false if not.
   */
  isRepeatingPlaylist() {
    // Your code goes here
    console.log('is?');
    // console.log(this.findSongName(this.nextSong))
    return this.findSongName(this.nextSong);
  }

  findSongName(next) {
    console.log(next);
    if (!next) return false;
    if (this.name === next.name) return true;
    return this.findSongName(next.nextSong);
  }
}

let first = new Song("Hello");
let second = new Song("Eye of the tiger");

first.nextSong = second;
second.nextSong = first;

console.log(first.isRepeatingPlaylist());