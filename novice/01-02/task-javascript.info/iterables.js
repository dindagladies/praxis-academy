// ---------------- 1 --------------------
let range = {
    from : 1,
    to : 3,

    [Symbol.iterator](){
        this.current = this.from;
        return this;
    },

    next(){
        if (this.current <= this.to){
            return {done:false, value: this.current++};
        }
        else{
            return {done:true};
        }
    }
};

for (let num of range){
    console.log(num);
}
// ---------------- 1 --------------------

// ---------------- 2 --------------------
for (let char of "test"){
    console.log(char);
}

// or
let str = "]@";
for (let char of str){
    console.log(char);
}
// ---------------- 2 --------------------

// ---------------- 3 --------------------
let string = "Hello";

let iterator = string[Symbol.iterator]();
while (true){
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
}
// ---------------- 3 --------------------

// ---------------- 4 --------------------
// not yet -> array.from
// ---------------- 4 --------------------

