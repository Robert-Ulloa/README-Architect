// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'none') {
      return '';
    }
    return `![License](https://img.shields.io/badge/License-${license.replace(/ /g, '%20')}-blue.svg)`;
  }
  
  // Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    switch (license) {
      case 'MIT':
        return 'https://opensource.org/licenses/MIT';
      case 'GPLv3':
        return 'https://www.gnu.org/licenses/gpl-3.0';
      case 'Apache 2.0':
        return 'https://opensource.org/licenses/Apache-2.0';
      case 'BSD 3-clause':
        return 'https://opensource.org/licenses/BSD-3-Clause';
      default:
        return '';
    }
  }
  
  // Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license === 'none') {
      return '';
    }
    return `## License
  
  This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  }
  
  // Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  To install the necessary dependencies, run the following command:
  \`\`\`
  npm install
  \`\`\`
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Tests
  To run tests, run the following command:
  \`\`\`
  ${data.tests}
  \`\`\`
  
  ## Questions
  If you have any questions about the repository, open an issue or contact me directly at [${data.email}](mailto:${data.email}). You can find more of my work at [${data.github}](https://github.com/${data.github}).
  
  LinkedIn: [${data.linkedIn}](${data.linkedIn})
  `;
  }
  
  module.exports = generateMarkdown;
