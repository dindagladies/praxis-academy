function countChar(word, ch){
    let total = 0;

    for (let i = 0; i < word.length ; i++){
        if (word[i] == ch){
            total += 1 ;
        }
    }
    return total;
}

function countBs(word){
    return countChar(word, "B");
}


//print
console.log(countBs("BBC"));
// 2
console.log(countChar("kakkerlak", "k"));
//4