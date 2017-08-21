/*
var obj = {
  name: 'Marcin'  
};


var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

*/
/*
var personString = '{"name": "Marcin", "age": "36"}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);

*/

const fs = require('fs');

var originalNote = {
    title: "Some title", 
    body: "Some body"
};

var originalNotesString = JSON.stringify(originalNote);
//OriginalNotesString 
fs.writeFileSync('notes.js', originalNotesString);

var noteString = fs.readFileSync('notes.js');
// string to object 
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);



























