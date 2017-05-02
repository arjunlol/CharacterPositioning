
function countLetters (letters){
  var countOfLetters = {};
  var lettersWtihSpaces = letters.toLowerCase();
  letters = letters.split(" ").join("").toLowerCase();
  var i =0;
  for (l of letters){
    if (countOfLetters[l]) {
      countOfLetters[l].push(lettersWtihSpaces.indexOf(l,i));
      //countOfLetters[l] = arrayOfIndex;
    } else {
      countOfLetters[l] = [];
      countOfLetters[l].push(lettersWtihSpaces.indexOf(l));
    }
    i++;
 }
 return countOfLetters;
}
console.log(countLetters("lighthouse in the house"));
