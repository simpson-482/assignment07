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
        }
        ]);


        console.log(`Here is the users response...`);
        console.log(userResponse);
        console.log(`end of userResponse...`);

        const myGitUserName = userResponse.username;
        const myProjectTitle = userResponse.projectTitle;
        const myProjectDescription = userResponse.projectDescription;

        var myResult = (`
### ${myProjectTitle}
${myProjectDescription}
${myGitUserName}
`)

var writeResult = fs.writeFileSync(path.join(__dirname, 'README.md'), myResult)
console.log("README.md file generated....")

}


start();