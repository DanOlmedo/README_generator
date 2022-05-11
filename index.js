// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generatorMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [`package name: `,`version: `,`description: `,`entry point: `,`test command: `,`git repository: `,`keywords: `,`author: `,`license: `];

const questions = [
    {
      type: 'input',
      message: 'package name: ',
      name: 'pname',
    },
    {
      type: 'input',
      message: 'version: ',
      name: 'ver',
    },
    {
      type: 'input',
      message: 'description: ',
      name: 'desc',
    },
    {
        type: 'input',
        message: 'dependencies: ',
        name: 'dep',
      },
      {
        type: 'input',
        message: 'contributors: ',
        name: 'cont',
      },
      {
        type: 'input',
        message: 'FAQs: ',
        name: 'faq',
      },
      {
        type: 'input',
        message: 'test commands: ',
        name: 'tcom',
      },
      {
        type: 'input',
        message: 'author: ',
        name: 'auth',
      },
      {
        type: 'input',
        message: 'license: ',
        name: 'lic',
      }];


// TODO: Create a function to write README file
function writeToFile(fileName,data) {
    fs.writeFile(fileName,data,function(err){
      //console.log(filename)
      console.log(data)
      if (err) {
        return console.log(err)
      }
      else {
        console.log("Succes")
      }
    })
}

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions)
   .then(function(data){
     writeToFile("README.md",generatorMarkdown(data));
     console.log(data);
   });
}

// Function call to initialize app
init();
