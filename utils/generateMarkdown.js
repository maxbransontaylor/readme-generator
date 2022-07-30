// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `https://img.shields.io/badge/license-${license}-blue`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const baseURL = "https://choosealicense.com/licenses/";
  switch (license) {
    case "MIT":
      return baseURL + "mit";
    case "ISC":
      return baseURL + "isc";
    case "Apache License 2.0":
      return baseURL + "apache-2.0";
    case "GNU GPLv3":
      return baseURL + "gpl-3.0";
  }
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
  const licenseLink = renderLicenseLink(license);
  const licenseBadge = renderLicenseBadge(license);
  return `# ${title}
  ![badge](${licenseBadge})

  ## Description
  ${description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Questions](#questions)
  4. [License](#license)
  5. [Tests](#tests)
  6. [Contributing](#how-to-contribute)

  ## Installation
  ${install}

  ## Usage
  ${usage}
  
  
  ## Questions
  Github: [${github}](https://github.com/${github}) </br>
  Email: [${email}](mailto:${email})
  
  ## License
  This project uses the [${license}](${licenseLink}) license.
  
  ## Tests
  ${tests}

  ## How to Contribute 
  ${contributing}
  `;
}

module.exports = generateMarkdown;
