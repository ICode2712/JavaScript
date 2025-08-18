/* eslint-disable */

/* 
Arithmetic Operators
    +
    -
    *
    /
    %
    ++
    --
*/

var a = 10
var b = 20

console.log(a % b)

/* 
Incremental
    pre-incremental     -> ++a
    post-incremental    -> a++

Decremental
    pre-decremental     -> --a   
    post-decremental    -> a--
*/

/*---------- Assignment operator ----------*/
a += b
console.log(a)

a -= b
console.log(a)

a *= b
console.log(a)

a /= b
console.log(a)

a %= b
console.log(a)

/*---------- Comparison operator ----------*/
console.log(a == b) //false
console.log(a != b) //true

console.log(a > b) //false
console.log(a < b) //true

console.log(a >= b) //false
console.log(a <= b) //true

var c = '50'
var d = 50

console.log(c === d) //false
console.log(c !== d) //true


/* 
LOGICAL OPERATORS
    &&
    ||
    !

BITWISE OPERATORS 
    &
    |
    ~
    ^
    <<
    >>
*/

console.log(typeof(a))