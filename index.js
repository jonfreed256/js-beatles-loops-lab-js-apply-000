// add solution here

function theBeatlesPlay(musicians, instruments) {
  var theBeatlesPlay = [];
  musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  for (var i = 0; i < musicians.length; i++) {
    theBeatlesPlay.push(musicians[i] + " plays" + instruments[i] + "."
  }
  return theBeatlesPlay;
}
