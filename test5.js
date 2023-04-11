const recylink = (array1,array2) => array1.filter((element)=>array2.includes(element))


console.log(recylink([1, 2, 5], [2, 1, 6])) // this outputs [1, 2]
console.log(recylink([1, 2, 3], [4, 5, 6])) // this outputs []