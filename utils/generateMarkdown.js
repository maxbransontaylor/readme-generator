// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
  return `# ${title}

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
  ${email}
  ${github}
  
  ## License
  ${license}
  
  ## Tests
  ${tests}

  ## How to Contribute 
  ${contributing}
  `;
}

module.exports = generateMarkdown;
