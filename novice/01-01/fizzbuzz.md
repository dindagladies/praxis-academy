# FizzBuzz

## Code
~~~
for (let a = 1; a <= 100; a++){
    let output = "";
    if (a%3 == 0) output += "Fizz";
    if (a%5 == 0) output += "Buzz";
    console.log(output || a);
}
~~~

## Result

1-100, but angka%3 = Fizz , angka%5 = Buzz

## Example

'''
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
'''

## Description
- use  looping
- using if else
