// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your application called?',
      },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your application.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions for your application.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage information for your application.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines for your application.',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions for your application.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license would you like your application to be covered by?',
        choices: ['MIT License','GNU Lesser General Public License v3.0','Mozilla Public License 2.0','GNU Affero General Public License v3.0', 'The Unlicense', 'Apache License 2.0', 'GNU General Public License v3.0'],
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'collaborators',
        message: 'List any collaborators here:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      }
  
  ]

  inquirer.prompt(questions).then((answers) => {
   // console.log(JSON.stringify(answers, null, ''));
   writeToFile('writetothisfile.md', answers);
  
  });


// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
   
    fs.appendFile(fileName, `
    # ${answers.title}
  
    ## Description

  ${answers.description}

    ## Installation

    ${answers.installation}

    ## Usage

    ${answers.usage}

    ## Credits

    ${answers.collaborators}

    ## License

    ${answers.license}

    ## How to Contribute

    ${answers.contribution}

    ## Tests

    ${answers.test}

    ## Questions

    Please send any inquiries to:

    Github:${answers.username}
    ${answers.email}
    `, 
    (err) => {
        if (err){
    console.log('Error');
    }

}
);}


// testAnswers = {
//     "title": "TotallyNotMadeUpApp",
//  "description": "This is an app that exists ;)",
//  "installation": "Press install",
//  "usage": "Used for lots of things...like...etc...",
//  "contribution": "Please do not contribute",
//  "test": "hahaha you think I write tests for these programs? god no",
//  "license": "idk probs MIT",
//  "username": "God",
//  "collaborators": "DJ Khaled",
//  "email": "hotmale@hotmail.com"
// };

//writeToFile('writetothisfile.md', testAnswers);

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
