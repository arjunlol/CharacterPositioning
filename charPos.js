
function countLetters (letters){
  var countOfLetters = {};
  var lettersWtihSpaces = letters.toLowerCase();
  //letters = letters.split(" ").join("").toLowerCase();
  var i =0;
  for (l of lettersWtihSpaces){
    if (countOfLetters[l]) {
      countOfLetters[l].push(lettersWtihSpaces.indexOf(l,i));
    } else if (l == " "){
        // i++;
        // continue;
    } else {
      countOfLetters[l] = [];
      countOfLetters[l].push(lettersWtihSpaces.indexOf(l));
    }
    i++;
 }
 return countOfLetters;
}
console.log(countLetters("lighthouse in the house"));
