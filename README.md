
# README GENERATOR

## Description
This project features a basic README generator that has users answer questions via inquirer.prompt in order to collect information and populate the markdown file. 

## Table of Contents

* [Installation](#installation)

* [Code](#code)

* [Usage](#usage)

* [Contributions](#contributions)

* [Tests](#tests)

* [License](#license)

* [Contact](#contact)

## Installation
To generate README run npm install
* inquirer
* util

## Code
```
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
```


## Usage

Currently utlized via node. Use wisely. See sample here:
![gif1](https://user-images.githubusercontent.com/70240665/101234485-651ece00-3685-11eb-9099-5c024548d052.gif)
![gif2](https://user-images.githubusercontent.com/70240665/101234733-6cdf7200-3687-11eb-983e-954d9aea6a3a.gif)

[Full Demo Video](https://drive.google.com/file/d/1VijvP6X_D9aj9nrw3u_IPJAmNVcsIEuq/view?usp=sharing)


## Contributions
Thank you for the support from my TAs, intructor, and claqssmates. I am looking to link the licenses in the README and add additional features that would cover all necessary elements of a README. Also would like to add logic to better support the user.


## Tests
N/A


## License
[MIT License](https://github.com/UrkelX/README_Generator/files/5646505/MIT.txt)


## Contact
GitHub: @[UrkelX](https://github.com/UrkelX)

Email: jordon@blackbirdrevolt.com

