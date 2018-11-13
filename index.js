// add solution here
// musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
// instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
//
// function theBeatlesPlay(musicians, instruments) {
//   var beatlesPlay = [];
//
//   for (var i = 0; i < musicians.length; i++) {
//     beatlesPlay.push(musicians[i] + " plays " + instruments[i]
// }
// return beatlesPlay;
// }
//
// musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
// instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {

     var allMusicians = [];

     for (var i=0; i < musicians.length; i++) {
         allMusicians.push(musicians[i]  + " plays " + instruments[i]);
     }
     return allMusicians;
 }
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
