class FormatError extends Error{
    constructor(message){
        super(message);
        this.name = "FormatError";
    }
}

let err = new FormatError("formatting error");

console.log(err.message);
console.log(err.name);
console.log(err.stack);

console.log(err instanceof FormatError);
console.log(err instanceof SyntaxError);