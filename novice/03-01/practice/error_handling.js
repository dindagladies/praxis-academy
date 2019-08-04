function first(){
    try{
        console.log('from try')
        return "result";
    }catch(e){
        // console.log('from catch');
    }finally{
        console.log('from finally')
    }
}

console.log(first());

function second(){
    try{
        console.log('from try');
        throw new Error("error");
    }catch (e){
        if("can't handle the error"){
            throw e;
        }
    }finally{
        console.log('from finally');
    }
}

console.log(second());