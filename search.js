const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni';

const searchString = 'paKhi';
// const doesExist = lyrics.includes('ami');
// const doesExist = lyrics.includes(searchString);
const lyricsLowerCase = lyrics.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist)
// console.log(doesExistOneLine);

// ...............................
// indexOf
console.log(lyrics.indexOf('kala'));

if(lyrics.indexOf('jeno') !== -1){
    console.log('Exists inside the string');
}
else{
    console.log('Can not find it');
}

//startsWith
console.log(lyrics.startsWith('Tumi'));

// endsWith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
console.log(fileName.endsWith('.pdf'));