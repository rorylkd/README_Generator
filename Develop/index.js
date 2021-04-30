// TODO: Include packages needed for this application

// Using inquirer for the prompts and filesystems to write to files.
const inquirer = require('inquirer');
const fs = require('fs');

// An array of questions for user input
// These aren't all actually questions per se but whatever, they'll do.
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Name of application:',
      },
    {
      type: 'input',
      name: 'description',
      message: 'Description of application:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Installation instructions for application:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage information for application:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution guidelines for your application:',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Test instructions for application:',
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

//A promise that takes the inquirer prompts and returns an object with the answers given by the user.
  inquirer.prompt(questions).then((answers) => {  
   // console.log(JSON.stringify(answers, null, ''));
   writeToFile('writetothisfile.md', answers);
  
  });


// This function atkes the answer object and dynamically generates a README file using pre-written markdown.
// It'll write all this to the writetothisfile.md file.
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

// We want the file we're writing to be start empty. 
function init() {
    fs.truncate('writetothisfile.md', 0, () => {
        console.log('');
    })
    
    }
    
    // Function call to initialize app
    init();