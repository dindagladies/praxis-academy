//https://medium.com/koding-kala-weekend/bagaimana-javascript-menghandle-proses-asynchronous-callback-promise-coroutine-dan-async-await-928326575289
function asyncDivision(dividend, divisor, cb){
    setTimeout(() => {
        let err;

        if (isNaN(dividend) && isNaN(divisor)) {
            err = 'one if dividend or divisor is not a number';
            cb(err, null);
        }

        if (divisor === 0 ){
            err = 'Divide by zero';
            cb(err, null);
        }

        const quotient = Number(dividend) / Number(divisor);
        cb(null, quotient);
    }, 2000);
}

// divide by zero. should return error
/*
asyncDivision(14, 0, (err, result) => {
  if (err) {
    throw new Error(err);
  }
  console.log(err, result);
});
*/

asyncDivision(14, 2, (err, result) => {
    if (err) {
      throw new Error(err);
    }
  
    console.log(err, result);
  });
  
  console.log('This should run before the asyncDivision returns its result.')