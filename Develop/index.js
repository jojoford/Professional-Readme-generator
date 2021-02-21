// Include packages needed for this application
const generateReadme = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');

// Create an array of questions for user input
const questions = [{
       {
    name: "title",
    type: "input",
    message: `Name your application `
    },
    {
    name: "os",
    type: "list",
    message: `This application will guide you through generating a README document.
    Markdown formatting is supported.
    Before we proceed, are you using a Windows machine or a Mac/Linux machine?`,
    choices: ["Windows", "Mac/Linux"]
  },
  {
    name: "Windows",
    type: "confirm",
    message: `The application will use Notepad. Wfter you write your response in Notepad use 'Save As' then save.
    Are you ready to get started?`,
    when: answers => answers.os === "Windows"
  },
  {
    name: "Mac/Linux",
    type: "confirm",
    message: `The application will use Vim. 
    Press "enter" to open the editor and "i" to start typing.
    When you're finished, press "esc" followed by ":wq" to save your answer and close Vim.
    Are you ready to get started?`,
    when: answers => answers.os === "Mac/Linux"
  },
  {
    name: "name",
    type: "input",
    message: `Name:`
  },
  {
    name: "email",
    type: "input",
    message: `Email Address:`
  },
  {
    name: "github",
    type: "input",
    message: `GitHub Username:`
  },
  {
    name: "description",
    type: "editor",
    message: `Describe the application:
    (Markdown is supported in the editor)`
  },
  {
    name: "tech",
    type: "checkbox",
    choices: ["HTML", "CSS", "Bootstrap 4", "JavaScript", "jQuery", "React.js", "Node.js"],
    message: "Select all technologies used in building the application:"
  },
  {
    name: "installation",
    type: "editor",
    message: `Describe install
    (Markdown is supported):`
  },
  {
    name: "usage",
    type: "editor",
    message: `Please provide instructions:
    (Markdown is supported)`
  },
  {
    name: "contributing",
    type: "editor",
    message: `Write guidelines for contributions to the project.
    (Markdown is supported)`
  },
  {
    name: "tests",
    type: "editor",
    message: `Describe the application's testing suites:
    (Markdown is supported)`
  },
  {
    name: "license",
    type: "list",
    choices: [ "Apache 2.0", "GPL 3.0", "GPL 2.0", "BSD 3 Clause", "None"],
    message: "Select a license or None"
  },
  {
    name: "badgeColor",
    type: "list",
    choices: ["brightgreen", "yellow", "red", "blue", "orange", "lightgray", "blueviolet"],
    message: "Select a color for your license badge:",
    when: answers => answers.license !== "None"
  }
];

const promptUser = () => {
    return inquirer.prompt(questions);
}

//A function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) new Error(err);
    console.log("README successfully created!");
  });
}


// A function to initialize app
function init() {
    promptUser()
        .then(questions => {
            return generateReadme(questions);
        })
        .then(formattedPage => {
            return writeToFile(formattedPage);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
        })
        .catch(err => {
            console.log(err);
        })
}


// Function call to initialize app
init();
