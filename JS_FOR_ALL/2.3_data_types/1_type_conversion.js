var str = '1000'
var n = 10

console.log(str * n)
console.log(str + n)

/* ----------- String to Number ---------- */
console.log(str)
console.log(Number(str))
console.log(Number.parseInt(str))

/* ----------- Number to String---------- */
console.log(n.toString())

console.log(Number(Infinity))
console.log(String(Infinity))
console.log(Boolean(Infinity))

/* 
Falsy Values
    ''
    0
    null
    undefined
    NaN
*/

console.log(Boolean(''))
console.log(Boolean('sdgshfgsdh'))

console.log(Boolean(0))
console.log(Boolean(45))

console.log(Boolean(null))
console.log(Boolean(undefined))

console.log(true)
var x = true
console.log(x.toString())

/* 
Constructor:
    String()
    Number()
    Boolean()
*/