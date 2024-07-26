const fs = require("fs");
const collectAnswers = require("./lib/collectAnswers");

let answerStream;

const questions = [
  "What is your name?",
  "Where do you live?",
  "What are you going to do with Node.js?"
];

const answerEvents = collectAnswers(questions, (answers) => {
  console.log("Thank you for your answers!");
  console.log(answers);
  process.exit();
});

answerEvents.on("answer", (answer) => 
  console.log(`The answer is ${answer}`)
);

process.stdin.once("data", (data) => {
  let name = data.toString();
  let filename = `./${name}.md`;
  if(fs.existsSync(filename)) {
    fs.unlinkSync(filename);
  }
  answerStream = fs.createWriteStream(filename);
  answerStream.write(
    `Question Answers for ${name}\n===========\n`
  );
});