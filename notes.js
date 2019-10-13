console.log("starting notes.js file");
const fs = require("fs");
let addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };

  var notesString = fs.readFileSync("notes-data.json");
  notes = JSON.parse(notesString);
  notes.push(note);
  console.log("Adding note", title, body);
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};
let getAll = () => {
  console.log("Getting all notes");
};
let readNote = title => {
  console.log("Now reading: ", title);
};
let removeNote = title => {
  console.log(`Title : ${title}, removed from notes`);
};
module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
};
