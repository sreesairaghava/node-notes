console.log("starting notes.js file");

module.exports.addNote = () => {
  console.log("New Note added");
  return "New note";
};

module.exports.addFun = (a, b) => {
  return a + b;
};
