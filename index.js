// add solution here

function theBeatlesPlay(musicians, instruments) {
  var beatlesPlay = [];

  for (var i = 0; i < musicians.length; i++) {
    beatlesPlay.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatlesPlay;
}

musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];