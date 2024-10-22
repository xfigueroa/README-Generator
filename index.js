// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please provide a description for your project:',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Provide the installation instructions:',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Provide the usage information:',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Provide the contribution guidelines:',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Provide the test instructions:',
        name: 'tests',
      },
      {
        type: 'list',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'None'],
        name: 'license',
      },
      {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>
    err ? console.log(err) : console.log('A New-README.md File has been created successfully!... Copy the file a rename to README.md')
    );
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeToFile('New-README.md', markdownContent);
    });
}

// Function call to initialize app
init();
