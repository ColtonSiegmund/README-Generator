// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseIMG = " ";
  var licenseTXT = " ";
  if (license === [0])
  licenseIMG = "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
  licenseTXT = "https://opensource.org/licenses/Apache-2.0";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// function getLicense (license) {
//   var licenseIMG = " test";
//   var licenseTXT = " test";
//   switch (license) {
//     case (license === 'Apache'):
//       return licenseIMG = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", licenseTXT = "[Apache License](https://opensource.org/licenses/Apache-2.0)"
//   }
// }

// function chooseLicense (data) {
//   let getLicense = ${data.license};
//   let licenseIMG = " ";
//   let licenseTXT = " ";
//   if (getLicense === "Apache") {
//     licenseIMG = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
//     licenseTXT = "[Apache License](https://opensource.org/licenses/Apache-2.0)"
//   } if (getLicense === "Boost") {
//     licenseIMG = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
//     licenseTXT = "[Boost License](https://www.boost.org/LICENSE_1_0.txt)"
//   } if (getLicense === "BSD") {
//     licenseIMG = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
//     licenseTXT = "[BSD License](https://opensource.org/licenses/BSD-3-Clause)"
//   } if (getLicense === "Creative Commons") {
//     licenseIMG = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
//     licenseTXT = "[Creative Commons License](http://creativecommons.org/publicdomain/zero/1.0/)"

// }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge();
  return `# ${data.title}
  [![License](${renderLicenseBadge.licenseIMG})](${renderLicenseBadge.licenseTXT})
  ## Description
  ${data.description}
  ## Table of Contents
  -[Installation](#installation)\n
  -[Usage](#usage)\n
  -[Credits](#credits)\n
  -[Contributing](#contributing)\n
  -[Tests](#tests)\n
  -[License](#license)\n
  -[Questions](#questions)\n
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## License
  [${data.license}](${renderLicenseBadge.licenseTXT})
  ## Contributing
  ${data.contribute}
  ## Tests
  ${data.tests}
  ## Questions
  For additional questions you can contact me at:\n
  GitHub: [${data.git}](https://github.com/${data.git})\n
  E-Mail: [${data.mail}](mailto:${data.mail})
  ## Credits
  ${data.credits}
`;
}

module.exports = generateMarkdown;
