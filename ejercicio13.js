
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(array, text) {
  return array.indexOf(text);
}

const removeItem = (array, text) =>{
  const index = findArrayIndex(array,text);
  array.splice(index, 1);
  console.log(array);
}

removeItem(mainCharacters, "Rey");

