const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Description?",
    },
    {
      type: "input",
      name: "installation",
      message: "How do you install the it?",
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use it?",
    },
    {
      type: "input",
      name: "contriubtion",
      message: "Contribution guidelines?",
    },
    {
      type: "input",
      name: "test",
      message: "How do you test it?",
    },
    // {
    //   type: "checkbox",
    //   name: "license",
    //   message: "which license?",
    //   choices:
    // },
  ]);

const generateReadme = (answers) =>
  `#${answers.title}
  
  
  
  
  
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions?](#questions-)

  
    
    ## Description 
     
    
    ${answers.description}
    


    
    ## Installation
    
    *Steps required to install project and how to get the development environment running:*
    
    ${answers.installation}
    
    ## Usage 
    
    *Instructions and examples for use:*
    
    ${answers.usage}

    
    ## Contributing
    
    *If you would like to contribute it, you can follow these guidelines for how to do so.*
    
    ${answers.contribution}

## Tests
    
    *Tests for application and how to run them:*
    
    ${answers.tests}

    
    ## License
    
    ${answers.license}
    


    ## Questions?
     
    
    For any questions, please contact me with the information below:
   
    GitHub: [@${answers.username}](${answers.email})
    `;

promptUser()
  .then((answers) => writeFileAsync("readMe.md", generateReadme(answers)))
  .then(() => console.log("Successfully wrote to readme"))
  .catch((err) => console.error(err));
