// ======== Looping a triangle =========
for (var line = "#"; line.length < 8; line += "#")
console.log(line);

// ==========FizzBuzz=================
// var angka = 3;

// if(angka%3 == 0) {
//     print ("Fizz");
// }

// else if (angka%5 == 0){
//     print ("Buzz");
// }

// else if (angka%3 == 0 && angka%5 == 0){
//     print ("FizzBuzz");
// }

// console.log(angka);

for (let a = 1; a <= 100; a++){
    let output = "";
    if (a%3 == 0) output += "Fizz";
    if (a%5 == 0) output += "Buzz";
    console.log(output || a);
}

// ======== Chessboard ===========
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);