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
        name: 'credits',
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

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Collaborators](#collaborators)
5. [License](#license)
6. [Contributions](#contributions)
7. [Tests](#tests)
8. [Contact Info](#contact)

  
## Description <a name="description"><a/>

${answers.description}

## Installation <a name="installation"><a/>

${answers.installation}

## Usage <a name="usage"><a/>

${answers.usage}

## Credits <a name="credits"><a/>

${answers.collaborators}

## License <a name="license"><a/>

${answers.license}

## Contribution Guidelines <a name="contributions"><a/>

${answers.contribution}

## Tests <a name="tests"><a/>

${answers.test}

## Questions <a name="contact"><a/>

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
