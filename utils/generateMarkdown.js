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
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  -[Installation](#installation)\n
  -[Usage](#usage)\n
  -[Credits](#credits})\n
  -[Contributing](#contributing})\n
  -[Tests](#tests)\n
  -[License](#license)\n
  -[Questions](#questions)\n
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ## Contributing
  ${data.contribute}
  ## Tests
  ${data.tests}
  ## License
  ${data.license}
  ## Questions
  For additional questions you can contact me at:\n
  GitHub: [${data.git}](https://github.com/${data.git})\n
  E-Mail: [${data.mail}](mailto:${data.mail})
`;
}

module.exports = generateMarkdown;
