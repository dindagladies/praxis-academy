// ----------------- 1 ------------------
function sumSalaries(salaries){
    let sum = 0
    for(salary of Object.values(salaries)){
        sum += salary;
    }
    return sum ;

}

//print
let salaries = {
    "John":100,
    "Pete":300,
    "Mary":250
};

console.log(sumSalaries(salaries));
//650
// ----------------- 1 ------------------

// ----------------- 2 ------------------
function count(obj){
    return Object.keys(obj).length;
}

//print
let user = {
    name: 'John',
    age: 30
};

console.log(count(user));
//2
// ----------------- 2 ------------------

