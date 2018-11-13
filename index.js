function theBeatlesPlay(musicians, instruments) {
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var musInstArray = [];
  for (var i = 0; i < musicians.length; i++) {
    musInstArray.push(musicians[i] + " plays " + instruments[i])
  }
  return musInstArray;
}// add solution here

function johnLennonFacts(facts) {
  var facts = [
   "He was the last Beatle to learn to drive",
   "He was never a vegetarian",
   "He was a choir boy and boy scout",
   "He hated the sound of his own voice"
 ];
 var factsPlusExcl = [];
 var i = 0;
 while (i < facts.length) {
   factsPlusExcl.push(facts[i] + "!!!")
   i++;
 }
 return factsPlusExcl
}

function iLoveTheBeatles(num) {
  var iLtB = ["I love the Beatles!"];
  var i = 0;
  do {
    i = i++;
    iLtB = iLtB + i;
  } while (i > 7);
  return iLtB;
}
