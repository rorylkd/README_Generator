// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
