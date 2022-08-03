const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a description of your project",
  },
  {
    type: "input",
    name: "install",
    message: "Enter installation instructions for your project",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage instructions for your application",
  },
  {
    type: "list",
    name: "license",
    message: "Which license are you using? (select ONE)",
    choices: ["MIT", "ISC", "Apache--2.0", "GNU--GPLv3", "none"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter instructions for contributing:",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter instructions for running tests:",
  },
  { type: "input", name: "email", message: "Enter your email:" },
  { type: "input", name: "github", message: "Enter your GitHub username:" },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile("./dist/README.md", data, (err) => {
    if (err) {
      throw err;
    }
    console.log("File written! Check the 'dist' folder.");
  });
}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
}

// Function call to initialize app
init()
  .then((data) => generateMarkdown(data))
  .then((markdown) => writeToFile(markdown));
