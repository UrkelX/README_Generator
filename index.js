// Packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// Prompts
const readmeQuestions = () => {
    return inquirer
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

        ]);
};

const generateContent = (answers) =>
    `
    ## ${answers.title}
    
    
    `;

const init = async () => {
    console.log('hello');
    try {
        const answers = await readmeQuestions();

        const readmeContent = generateContent(answers);

        await writeFileAsync('REAME.md', readmeContent);

        console.log('Successfully wrote to README.md');
    } catch (err) {
        console.log(err);
    }
};

init();

