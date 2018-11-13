// add solution here
musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var beatlesPlay = [];

  for (var i = 0; i < musicians.length; i++) {
    beatlesPlay.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatlesPlay;
}

facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];

function johnLennonFacts(facts) {
  var lennonFacts = [];
  for (var i = 0; i < facts.length; i++) {
    lennonFacts.push(facts[i] + "!!!");
  }
  return lennonFacts;
}
