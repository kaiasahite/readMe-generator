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
      name: "github",
      message: "What is your github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "description",
      message: "Description?",
    },
    {
      type: "input",
      name: "installation",
      message: "How do you install it?",
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use it?",
    },
    {
      type: "input",
      name: "contribution",
      message: "Contribution guidelines?",
    },
    {
      type: "input",
      name: "test",
      message: "How do you test it?",
    },
    {
      type: "list",
      name: "license",
      message: "which license?",
      choices: ["mit", "apache", "unlicense"],
    },
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
    
    
    ${answers.installation}
    

    ## Usage 
    
    
    ${answers.usage}

    
    ## Contributing
    
   
    ${answers.contribution}

    
    ## Tests
    
    
    ${answers.test}

    
    ## License
    
    ${answers.license}
    

    ## Questions?
     
    
    Contact-
   
    
    GitHub: @${answers.github}
    
    Email: @${answers.email}
    `;

promptUser()
  .then((answers) => writeFileAsync("readMe.md", generateReadme(answers)))
  .then(() => console.log("Successfully wrote to readme"))
  .catch((err) => console.error(err));
