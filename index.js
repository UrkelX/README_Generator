// Packages
const inquirer = require('inquirer');
const fs = require('fs');

// Prompts
inquirer 
    .prompt([
        {
            type: 'input',
            message: "What is your GitHub username? (No @ needed)",
            name: 'username',
            default: 'UrkelX',
        },
        {
            type: "input",
            message: "Project Title",
            name: "title"
        },
        {
            type: "input",
            message: "Enter Project Description",
            name: "description"
        },
        {
            type: "input",
            message: "Enter Installation Instructions",
            name: "installation"
        },
        {
            type: "input",
            message: "Enter Usage Instructions",
            name: "usage"
        },
        {
            type: "input",
            message: "Enter Contribution Guidelines",
            name: "contributions"
        },
        {
            type: "input",
            message: "Provide Test Info and How to Run",
            name: "tests"
        },
        {
            type: "list",
            message: "Choose a License for Your Project",
            choices: ['Apache License 2.0', 'MIT License', 'The Unlicense'],
            name: "license"
        },
        {
            type: "input",
            message: "Enter Your Email",
            name: "Email"
        }

    ])
    .then(response => {

        fs.writeFile('README.md', response, err => {
            if (err) {
                return console.log(err);
            }
            
            console.log("Success! Your README has been created")
        });

    })

   
