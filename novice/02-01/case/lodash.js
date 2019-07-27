//http://zetcode.com/javascript/lodash/
//https://medium.com/voobans-tech-stories/10-lodash-functions-everyone-should-know-334b372aec5d
// _.first() / _.head()

const _ = require("lodash")

words = ['sky', 'wood', 'forest', 'falcon', 
    'pear', 'ocean', 'universe'];

let fel = _.first(words);
let lel = _.last(words);

console.log(`First element: ${fel}`);
console.log(`Last element: ${lel}`);

//_.slice()
const _ = require("lodash")

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let c1 = _.slice(nums, 2, 6);
console.log(c1);

let c2 = _.slice(nums, 0, 8);
console.log(c2);