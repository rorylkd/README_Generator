// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
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
        name: 'email',
        message: 'What is your email address?',
      }
  
  ]

  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
