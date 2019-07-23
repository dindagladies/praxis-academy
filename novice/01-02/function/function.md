# Minimum
## Result
```
console.log(min(0,10))
0

console.log(min(0,-10))
-10
```

## Code
[minimum.js]()

## Explanation
- There is function, call min
- min function has parameters, a and b
- There is if else method,
- if a less than b , then print or return a
- and if b less than a , then print or return b

# Recursion
## Result 
```
console.log(isEven(50))
True

console.log(isEven(75))
True

console.log(isEven(-1))
False
```

## Code
[recursion.js]()

## Explanation
- There is isEven function , that has angka parameter
- using if else method
- if angka more then -1 , then return boolean true
- if angka less then 0, then return boolean false


# Bean Counting

## Result
```
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
```

## Code
[beancounting.js]()


## Explanation
- before run countBs function, we should make countChar function. 
- in countChar function, we have word and ch parameters. 
- there is total = 0 ( for variabel counting)
- for i = 0 and i less then word length , i always add 1
- in for, there is if word in i same like ch, so that will start counting,or plus 1.
- then return toal.

- Then in countBs function, there is countChar function with ch = B