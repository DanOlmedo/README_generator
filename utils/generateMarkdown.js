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
  return `# ${data.pname}

          https://github.com/${data.auth}/${data.pname}
          #Table of contents
          *Installation
          *Usage
          *License
          *Contributors
          *Tests
          *FAQ

          #
          The follwing dependencies are necessary to run the application:
          ${data.dep}

          General utility of application:
          ${data.desc}

          License:
          ${data.lic}

          Contributors:
          ${data.cont}

          Test commands to demonstrate app functionality:
          ${data.tcom}

          FAQs:
          ${data.faq}

          If you have any questions, contact: ${data.auth}.
`;
}

module.exports = generateMarkdown;
