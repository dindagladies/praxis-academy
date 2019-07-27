// Ramda apply function

const R = require('ramda');

let nums = [3,5,7,8,2,1];

let res = R.apply(Math.min, nums);
console.log(res);

let res2 = R.apply(Math.maxm, nums);
console.log(res2);

//Ramda Call  Function
const R = require('ramda');
let res = R.call(R.add, 1,2);
console.log(res);

console.log(R.call(R.repeat, 'x')(5));

R.call(console.log, 1, 2, 3);