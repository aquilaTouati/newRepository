var letterCount = 0;
var WordCount = 0;
var vowelsCount = 0;
do {
  var letter = prompt("Donner une lettre");

  letterCount += 1;

  if (
    letter == "a" ||
    letter == "e" ||
    letter == "i" ||
    letter == "o" ||
    letter == "u"
  ) {
    vowelsCount += 1;
  }

  if (letter == " ") {
    wordCount += 1;
  }
} while (letter != ".");

console.log("Number of letters=", letterCount);
console.log("Number of letters=", vowelsCount);
console.log("Number of letters=", wordCount);
