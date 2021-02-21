//  A function that returns a license badge based on which license is passed in

const addBadge = licenseChoice => {
  if (licenseChoice == 'Apache License 2.0') {
    return `
![apache](https://img.shields.io/badge/license-Apache%20License%202.0-blue)
    `;
  } else if (licenseChoice == 'GNU GPLv3') {
    return `
![gnu](https://img.shields.io/badge/license-GNU%20GPLv3-green)
    `;
  } else if (licenseChoice == 'ISC License') {
    return `
![isc](https://img.shields.io/badge/license-ISC%20License-purple)
    `;
  } else {
    return `

    `;
  }
}
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${addBadge(data.license)}
## Description
${data.description}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
${checkLicense(data.license)}
## Contributing
${data.contribution}
## Tests
${data.test}
## Questions
[GitHub Profile](https://github.com/${data.userName}/)  
I can be reached at ${data.email}.
`;
}

module.exports = generateMarkdown;
