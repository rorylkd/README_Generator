// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (answer.license == "MIT") {
    fs.appendFile(
      fileName,
`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    );
  } else if (answer.license == "GNU Lesser General Public License v3.0") {
    fs.appendFile(
      fileName,
`[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
    );
  } else if (answer.license == "Mozilla Public License 2.0") {
    fs.appendFile(
      fileName,
`[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    );
  } else if (answer.license == "GNU Affero General Public License v3.0") {
    fs.appendFile(
      fileName,
`[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0`
    );
  } else if (answer.license == "The Unlicense") {
    fs.appendFile(
      fileName,
`[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    );
  } else if (answer.license == "Apache License 2.0") {
    fs.appendFile(
      fileName,
`[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    );
  } else if (answer.license == "GNU General Public License v3.0") {
    fs.appendFile(
      fileName,
`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    );
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Kinda did this in the writeToFile function...i don't know why you'd seperate them. Please explain.

function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

// Why would I create a seperate module for four functions? I'm deleting this file later, so don't worry about it's contents at the moment. 
// The same functions will be included in the index.js file.
