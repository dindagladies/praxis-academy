// OBJECT

//1
// create an empty object user
// let user = new Object();

// add property
let user = {
    name : "John",
    surname : "Smith"
}

// remove property name from object
delete user.name;

//change value name
user.name = "Pete";

//print
// console.log(user);

//2 - check for emptiness
let schedule = {}

function isEmpty(obj){
    for (key in obj){
        return false;}
    return true;}

// add
schedule ["8"] = "get up";

//print
console.log(isEmpty(schedule));

//3 - check
const user = {
    name: "John"
  };
  
  // does it work?
  user.name = "Pete"; //work!

//4 - sum object

let salaries = {
    J : 100,
    A : 160,
    P : 130
}

let sum = 0
for (let key in salaries){
    sum += salaries[key];
}

console.log(sum);

5 - multipy numeric properties by 2
let menu = {
    w : 200,
    h : 300,
    t : "Mymenu"
};

function multipyNumeric(obj){
    for (let key in obj){
        if(typeof obj[key] == 'number'){
            obj[key] *= 2;
        }
    }
}

//print
console.log(multipyNumeric(menu.width));

Iterable
