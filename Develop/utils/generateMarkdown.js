//  A function that returns a license badge based on which license is passed in 
// If there is no license, return an empty string
//function renderLicenseBadge(license); function renderLicenseLink(license) {}; and liscenceSection
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ""
}function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `\n* [License](#license)\n`
    )
  }
  return ""
}
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License
This project was developed under the ${license} license.`
    )
  }
  return ""
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}
  

   #  Project Title
     ${data.title}
    
  ##  Description
    ${data.description}
  
  ## Technologies
  ${data.tech.join(", ")}

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions  
  See my Github [GitHub](https://www.github.com/${data.github})  
  Email me  <${data.email}>
  `;
}

module.exports = generateMarkdown;



//trial and error notes

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
// alt to function renderLicenseLink(license) {}
/*const checkLicense = licenseChoice => {
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
*/
