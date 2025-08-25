const sentence = "THIS IS A SENTENCE";

function doesContainsGivenSting(sentence, stringA) {
  // return boolean
  return sentence.indexOf(stringA) > -1; // starts from -1
}

console.log(
  doesContainsGivenSting(
    "KINGSLEY IS A TEACHER, BUT HE GOES TO GYM TODAY",
    "12367"
  )
);

console.log(doesContainsGivenSting(sentence, "bAT"));

console.log(doesContainsGivenSting(sentence, "aS"));
