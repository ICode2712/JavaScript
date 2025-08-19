/* eslint-disable */

/*----- shorthand || -----*/

var Name = ''

/* 

if (Name.length === 0) {
    fullname = 'Imran Hoshen'
} else {
    fullname = Name
}

*/

var fullname = Name || 'Imran Hoshen'

console.log(fullname)

/* -----shorthand && ----*/

var isOk = true

/* 
if (isOk) {
    console.log('Everything is ok')
} 
*/

isOk && console.log('Everything is ok')