console.log("Starting app..");

//requiring fs module to get access to file system
const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const notes = require("./notes");

// console.log(_.isString(true));
// console.log(_.isString("Sree Sai"));

var filteredArrary = _.uniq(["Sree", 1, "Sree", 1, 2, 3, 4]);
console.log(filteredArrary);

// let res = notes.addNote();

// let add_res = notes.addFun(9, -2);
// console.log(add_res);
// console.log(res);

// let user = os.userInfo();

// fs.appendFile(
//   "greetings.txt",
//   `created by: ${user.username} you are ${notes.age}`,
//   err => {
//     if (err) {
//       console.log("Some Error happened");
//     }
//   }
// );
