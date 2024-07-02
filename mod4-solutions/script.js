(function () {

var names = ["Hima", "Jack", "Lilly", "Jaan", "Lisa", "Peeli", "Jay", "Jimmy", "Tara", "Mary"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();
