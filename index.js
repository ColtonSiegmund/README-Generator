// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
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
      type: 'checkbox',
      message: 'What sections would you like in your README?',
      name: 'table',
      choices:["Installation", "Usage", "Credits", "License", "Features", "Questions"]
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
      choices: ['Apache', "Boost", "BSD", "Creative Commons", "Eclipse", "GNU", "IBM", "MIT"]
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

// Function call to initialize app
init();
