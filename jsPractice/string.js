const lyrics = "tmi bondhu Kala Kala";
// const lyricsLowerCase = lyrics.toLowerCase();
const searchString = "Bondhu";
// const searchStringLower = searchString.toLowerCase();
const doesExist = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExist);