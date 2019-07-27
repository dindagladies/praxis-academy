// kamus bahasa inggris - indonesia

//new variabel
var english = new Map([[]]);

// add data
english.set('one', 'satu')
english.set('two', 'dua')
english.set('three', 'tiga')

//search data & show data
//console.log(english.get('one'));

//delete data
english.delete('one')
// console.log(english.get('one'));
console.log(english);

//
// var words = [
//     {
//         word : "one",
//         mean : "satu"
//     },
//     {
//         word : "two",
//         mean : "dua"
//     },
//     {
//         word : "three",
//         mean : "tiga"
//     },
//     {
//         word : "four",
//         mean : "empat"
//     },
//     {
//         word : "five",
//         mean : "lima"
//     }
// ];

//
// const statements = words.map(wordItem => {
//     return wordItem;
    
// })
//console.log(statements);

//

let words = new Map([
    ['one', 'satu'],
    ['two', 'dua']
]);

function add(a, b){
    let word = new Map([[]]);
    word.set(a, b)
}

console.log(add('not', 'tidak'));

function cek(){
    //var word = ["two"];
    for(var word of words.keys()){
        return words.get(word);
        // console.log(word);
        // words.get('one');
    }
}

console.log(cek());