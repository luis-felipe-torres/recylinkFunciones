const recylink = (arrayObj) => arrayObj.map((element) => element.lastName);

const contacts = [
  { firstName: "Juanito", lastName: "Rokket" },
  { firstName: "James", lastName: "Link" },
  { firstName: "Harry", lastName: "Potter" },
];
console.log(recylink(contacts)); // this outputs ['Rokket', 'Link', 'Potter']
