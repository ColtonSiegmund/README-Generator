// importing needed modules and documents
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// the initializing function handles asking and recording questions and printing the md document.
function init() {
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your projects title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is your projects description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the steps to install your application?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'What are the instructions and examples for use of your application?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Who or what are the credits for your application?',
      name: 'credits',
    },
    {
      type: 'input',
      message: 'What are your contribution guidelines?',
      name: 'contribute',
    },
    {
      type: 'input',
      message: 'What are your test instructions?',
      name: 'tests',
    },
    {
      type: 'checkbox',
      message: 'What is the license for this project?',
      name: 'license',
      choices: ["Apache", "Boost", "MIT"]
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'git',
    },
    {
      type: 'input',
      message: 'What is your E-Mail address?',
      name: 'mail',
    },
  ])
  .then((response) => {
  fs.writeFileSync("README.md", markdown(response))
    console.log(response)
  }).catch(error => {
    console.log("Error:", error)
  })

}

// calling the function
init();
