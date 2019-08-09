# Error Handling, "try.. catch"

## Code
 [error_handling.js]()

## Result
```
//first
from try
from finally
undefined

//second
from try
from finally
error
```

## Explanation
compare between first and second
- There is first funciton, using method try, catch, and finally.
- when we run first function, we will return "from try", from try, because there isn't an error.
- Then return "from finally", for the end
- And there is second function, using the same method.



# Custom errors, extending error

## Code
 [custom_error.js]()
## Result
```
formatting error
FormatError
FormatError: formatting error
true
false
```

## Explanation
- In FormatError class, there is parent constructure, with name declaration.
- and there is new FormatError with the string, and the name is err 
- Then we print/console.log message, name, stack using err variable, and instanceof.
- console.log from SyntaxError is false, because there's no the declaration.


# DOM and Javascript

## Code
 [bug_error.js]()

## Results
```
//Retry
64

//The Locked Box
True
```

## Explanation
- There is primitiveMultiply function, with the declaration using if else,
- And primitiveMultiply function declaration in reliableMultiply function, with a,b paramaters
- In primitiveMultiply function, if the declaration is true, so return a x b, and if others, will return error.
