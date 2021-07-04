// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is name of your Project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe  what your application does:'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide some installation instructions:'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide some Usage instructions:'
      },
      {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Provide some usage information:'
      },
      {
        type: 'list',
        message: 'Please select licence used in project',
        name: 'license',
        choices: ['Apache', 'GNU', 'MIT', 'ISC', 'none']
      },
      {
        type: 'input',
        name: 'test',
        message: 'Provide examples on how to run your application'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address'
      },
      {
        type: 'input',
        name: 'myGitHub',
        message: 'Enter your GitHub username'
      },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, (data), function(err) {
        if (err) {
          return console.log(err);
        }
  
        console.log('Success!');
        console.log (data);
      });
}


// TODO: Create a function to initialize app
function init() {
    
    inquirer
    .prompt(questions)
     
    .then(function(data) {
        license = 
      data =  generateMarkdown(data);
        const filename = 'Readme.md'
         writeToFile(filename, data);
        
      });

    
}

// Function call to initialize app
init();
