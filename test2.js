const recylink = (arrayWords) => {
  let palabraMasLarga = arrayWords[0];
  for (let i = 1; i < arrayWords.length; i++) {
    if (arrayWords[i].length > palabraMasLarga.length) palabraMasLarga = arrayWords[i];     
  }
  return palabraMasLarga}
console.log(recylink(['best', 'company', 'ever']))