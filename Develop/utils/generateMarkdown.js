//  A function that returns a license badge based on which license is passed in
/*const addBadge = licenseChoice => {
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
*/
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}
function renderLicenseBadge(license, color) {
  if (license === "None") {
    return "";

  } else {
    const formatLicense = license.split(" ").join("+");
    const badge = `https://img.shields.io/static/v1?label=license&message=${formatLicense}&color=${color}`;
    return badge;
  }
}
// Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}
const checkLicense = licenseChoice => {
  if (licenseChoice == 'Apache License 2.0') {
    return `
This application is covered by the Apache v2.0 License, the terms of which can be found [here](https://www.apache.org/licenses/LICENSE-2.0.txt).
    `;
  } else if (licenseChoice == 'GNU GPLv3') {
    return `
This application is covered by the GNU General Purpose License, the terms of which can be found [here](https://www.gnu.org/licenses/gpl-3.0.en.html).
    `;
  } else if (licenseChoice == 'ISC License') {
    return `
This application is covered by the ISC License, the terms of which can be found [here](https://opensource.org/licenses/ISC).
    `;
  } else {
    return `

    `;
  }
}
// Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}
function renderLicenseLink(license) {
  if (license === "None") {
    return "";

  } else {
    const queryString = license.split(" ").join("-");
    return `https://opensource.org/licenses/${queryString}`;
  }
}
// function to generate markdown for README

  const generateMarkdown = (data) => {
  const { name, license, badgeColor: color } = data;

  const badge = renderLicenseBadge(license, color);
  const link = renderLicenseLink(license);
  const licenseMarkup = renderLicenseSection(license, link, name);
  const licenseBadge = `[![license](${badge})](${link})`;

  let optionalBadge;

  if (data.license === "None") optionalBadge = "";
  else optionalBadge = licenseBadge;
    
    //instead of function generateMarkdown(data) {${addBadge(data.license)}
  return
    `# ${data.title}
     ${optionalBadge}

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
