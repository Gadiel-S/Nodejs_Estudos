const fs = require("fs");

// fs.renameSync("./javascriptTarget", "./lib/javascriptTarget");
// console.log("javascriptTarget folder moved");

// fs.rmdir("./lib/javascriptTarget", function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("javascriptTarget directory removed");
//   }
// });

fs.readdirSync("./lib/model").forEach((file) => {
  fs.renameSync(`./lib/model/${file}`, `./lib/view/${file}`);
});

console.log("Files removed");
fs.rmdirSync("./lib/model");
console.log("Folder removed");