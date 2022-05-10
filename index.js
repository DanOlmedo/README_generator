// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [`package name: `,`version: `,`description: `,`entry point: `,`test command: `,`git repository: `,`keywords: `,`author: `,`license: `];

inquirer
  .prompt([
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
        message: 'entry point: ',
        name: 'ep',
      },
      {
        type: 'input',
        message: 'test command: ',
        name: 'tcomm',
      },
      {
        type: 'input',
        message: 'git repository: ',
        name: 'grepo',
      },
      {
        type: 'input',
        message: 'keywords: ',
        name: 'kwrds',
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
      },
]).then((data) => {
const filename = `${data.pname.toLowerCase().split(' ').join('')}.json`;
fs.writeFile(filename, `package name: ${data.pname}\nversion: ${data.ver}\ndescription: ${data.desc}\nentry point: ${data.ep}\ntest command: ${data.tcomm}\ngit repository: ${data.grepo}\nkeywords: ${data.kwrds}\nauthor: ${data.auth}\nlicense: ${data.lic}`.json);
});

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, (err) =>
   err ? console.error(err) : console.log('Success!') );
}

// TODO: Create a function to initialize app
function init() {
   
}

// Function call to initialize app
init();
