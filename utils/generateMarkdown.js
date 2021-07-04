// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !=='none' )  {

  return `[![Generic badge](https://img.shields.io/badge/License-${license}-blue.svg?style=flat&logo=appveyor)](https://shields.io/)`
  } else {
    return '';
  }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license ==='Apache' )  {
    return `## License \n  https://choosealicense.com/licenses/apache-2.0/`; 
   } else  if (license ==='GNU' )  {
    return `## License \n  https://choosealicense.com/licenses/agpl-3.0/`; 
   } else  if (license ==='MIT' )  {
    return `## License \n  https://choosealicense.com/licenses/mit/`; 
   } else  if (license ==='ISC' )  {
    return `## License \n  https://choosealicense.com/licenses/isc/`; 
   } else {
      return '';
   } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license !=='none' )  {
    return `* [License](#license)`; 
   } else {
      return '';
   } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Title \n  ${data.title}
  ## Badge \n ${(renderLicenseBadge(data.license))}
  ## Description \n ${data.description}
  ## Table of Contents
  *  [Installation](#installation)
  *  [Usage](#usage)
  *  [Credits](#credits)
  ${renderLicenseSection(data.license)}
  ## Installation \n ${data.installation}
  ## Usage \n ${data.usage}
  ## Credits \n ${data.credits}
  ${(renderLicenseLink(data.license))}
  ## Contribution \n ${data.contribution}
  ## Test \n ${data.test}
  ## Questions
  ## Email address \n ${data.email}
  ## My GitHub Account \n https://github.com/${data.myGitHub}
`;
}

module.exports = generateMarkdown;
