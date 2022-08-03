// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return '';
  }
  return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') { return '' }
  return `- [License](#license)`

}
function renderLicenseSection(license) {
  if (license === 'none') { return '' }
  return `
  ## License
  This project uses the ${license} license.`
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    description,
    install,
    usage,
    license,
    contributing,
    tests,
    email,
    github,
  } = data;
  const licenseSection = renderLicenseSection(license)
  const licenseLink = renderLicenseLink(license);
  const licenseBadge = renderLicenseBadge(license);
  return `# ${title}
  ${licenseBadge}

  ## Description
  ${description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Questions](#questions)
  ${licenseLink}
  - [Tests](#tests)
  - [Contributing](#how-to-contribute)

  ## Installation
  ${install}

  ## Usage
  ${usage}
  
  
  ## Questions?
  Github: [${github}](https://github.com/${github}) </br>
  Email: [${email}](mailto:${email})
  
  ${licenseSection}
  
  ## Tests
  ${tests}

  ## How to Contribute 
  ${contributing}
  `;
}

module.exports = generateMarkdown;
