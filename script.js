const inquirer = require("inquirer");
const axios = require("axios");
const fs = require('fs');
const path = require('path');
async function start() {
    console.log(`I am starting...`);

    const userResponse = await inquirer
    .prompt([
        {
            type: "input",
            message: "What is your GitHub user name?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your Project Title?",
            name: "projectTitle"
        },
        {
            type: "input",
            message: "What is your Projects description",
            name: "projectDescription"
        },
        {
            type: "input",
            message: "Please provide installation instructions here if applicable.",
            name: "projectInstallation"
        },
        {
            type: "input",
            message: "Please provide user instructions for the user to run your application here.",
            name: "projectUserInstructions"
        },
        {
            type: "input",
            message: "Please add instructions for users to contribute to or report issues with the project here",
            name: "projectContributions"
        },
        {
            type: "input",
            message: "Please provide the license type for this project if applicable",
            name: "projectLicense"
        },
        {
            type: "input",
            message: "Please list any questions about the project if applicable",
            name: "projectQuestions"
        },
        ]);


        console.log(`Here is the users response...`);
        console.log(userResponse);
        console.log(`end of userResponse...`);

        const myGitUserName = userResponse.username;
        const myProjectTitle = userResponse.projectTitle;
        const myProjectDescription = userResponse.projectDescription;
        const myProjectInstallation = userResponse.projectInstallation;
        const myProjectUserInstructions = userResponse.projectUserInstructions;
        const myProjectContributions = userResponse.projectContributions;
        const myProjectLicense = userResponse.projectLicense;
        const myProjectQuestions = userResponse.projectQuestions;

        var myResult = (`
## Project Title 
${myProjectTitle}
## Project Description 
${myProjectDescription}
## GitHub Username 
${myGitUserName}
## Installation Guidelines 
${myProjectInstallation}
## User Instructions 
${myProjectUserInstructions}
## Project Contributions 
${myProjectContributions}
## Project License 
${myProjectLicense}
## Project Questions
${myProjectQuestions}
`)

var writeResult = fs.writeFileSync(path.join(__dirname, 'README.md'), myResult)
console.log("README.md file generated....")

}


start();