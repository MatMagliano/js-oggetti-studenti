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
    $('#student').append(key + ': ' + student[key] + '<br>');

  };

  //Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
  var students = [
    {
      titolo: 'STUDENTE',
      name: 'Peter',
      surname: 'Parker',
      age: '33'
    },
    {
      titolo: 'STUDENTE',
      name: 'Tony',
      surname: 'Stark',
      age: '37'
    },
    {
      titolo: 'STUDENTE',
      name: 'Bruce',
      surname: 'Banner',
      age: '39'
    }
  ]
  for (var i = 0; i < students.length; i++) {
    var student = students[i]
    console.log('name: ' + student.name + 'surname:' + student.surname);
    $('#students').append(student.titolo + '<br>'  + 'name: ' + student.name + '<br>' + 'surname:' + student.surname + '<br>' );
  };

  // Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
  var inserimento = {
    name: prompt('Inserisci il nome:'),
    surname: prompt('Inserisci il cognome:'),
    age: parseInt(prompt('Inserisci il nome:'))
  }
for (var key in inserimento) {
  console.log(key + ': ' + inserimento[key]);
    $('#new_student').append(key + ': ' + inserimento[key] + '<br>');
};
});
