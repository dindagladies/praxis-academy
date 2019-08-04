// Retry
class MultiplicatorUnitFailure extends Error{}

function primitiveMultiply(a,b){
    if(Math.random() < 0.2){
        return a*b;
    }
    else{
        throw new MultiplicatorUnitFailure("Klunk");
    }
}

function reliableMultiply(a, b){
    primitiveMultiply(a,b);
}

console.log(reliableMultiply(8,8));

// The Locked Box
const box = {
    locked: true,
    unclock(){this.locked = false;},
    lock(){this.locked = true},
    _content: [],
    get content(){
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body){

}

withBoxUnlocked(function(){
    box.content.push("gold piece");
});

try{
    withBoxUnlocked(function(){
        throw new Error("Pirates on the horizon! Abort!");
    });
}catch(e){
    console.log("Error raised: " + e);
}
console.log(box.locked);