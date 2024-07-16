// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'none') {
      return '';
    }
    return `![License](https://img.shields.io/badge/License-${license.replace(/ /g, '%20')}-blue.svg)`;
  }
  
  // Function that returns the license link
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
  
  // Function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license === 'none') {
      return '';
    }
    return `## License
  
  This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  }
  
  // Function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Deployment](#deployment)
  - [Repository](#repository)
  - [License](#license)
  - [Questions](#questions)
  
  ## Deployment
  The application is deployed at the following URL:
  [${data.deployment}](${data.deployment})
  
  ## Repository
  The repository can be found at the following URL:
  [${data.repo}](${data.repo})
  
  ${renderLicenseSection(data.license)}
  
  ## Questions
  For any questions, please contact me with the information below:
  
  GitHub: [${data.github}](https://github.com/${data.github})
  
  Email: [${data.email}](mailto:${data.email})
  
  LinkedIn: [${data.linkedIn}](${data.linkedIn})
  `;
  }
  
  module.exports = generateMarkdown;
  