$(document).ready(function() {
  //alert('Hello');

  //Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
  var student = {
    name: 'Matteo',
    surname: 'Magliano',
    age: '37'
  };
  for (var key in student) {
    console.log(key + ': ' + student[key]);
    $('#student').append(key + ': ' + student[key] + ' / ');

  }
});
