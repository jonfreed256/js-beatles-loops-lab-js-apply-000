// add solution here
musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var theBeatlesPlay = [];

  for (var i = 0; i < musicians.length; i++) {
    theBeatlesPlay.push(musicians[i] + " plays" + instruments[i] + "."
  }
  return theBeatlesPlay;
}
