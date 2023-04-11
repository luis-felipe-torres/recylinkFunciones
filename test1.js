const recylink = (x) => (y) => (z) =>  x*y*z

console.log(recylink(2)(5)(3)) // this outputs 30
console.log(recylink(4)(2)(2)) // this outputs 16
console.log(recylink(8)(2)(1)) // this also outputs 16
