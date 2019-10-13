//requiring fs module to get access to file system
const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const notes = require("./notes");
const yargs = require("yargs");

const argv = yargs.argv;

let command = argv._[0];

console.log("Yargs: ", argv);
console.log("command is:", command);
if (command === "add") {
  notes.addNote(argv.title, argv.body);
} else if (command === "list") {
  notes.getAll();
} else if (command === "read") {
  notes.readNote(argv.title);
} else if (command === "remove") {
  notes.removeNote(argv.title);
} else {
  console.log("Command not recognized");
}
