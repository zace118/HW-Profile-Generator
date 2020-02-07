const inquirer = require('inquirer'),
    fs = require('fs');


let team = [];

// Inquirer inquiring user for name, ID# and job title
function initialPrompt() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'name'
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email'
            },
            {
                type: 'list',
                message: 'What is your title?',
                name: 'title',
                choices: [
                    'Intern',
                    'Engineer',
                    'Manager'
                ]
            },
            {
                type: 'input',
                message: 'What school do you go to?',
                name: 'school',
                when: function (answers) {
                    return answers.title === "Intern";
                }
            },
            {
                type: 'input',
                message: 'What is your GitHub user name?',
                name: 'github',
                when: function (answers) {
                    return answers.title === "Engineer";
                }
            },
            {
                type: 'input',
                message: 'What is your office number?',
                name: 'officeNumber',
                when: function (answers) {
                    return answers.title === "Manager";
                }
            }

        ]).then(function (res) {
            console.log(res);
            team.push(res);

            moreTeam();

        }).catch(function (err) {
            console.log(err);
        })
};

initialPrompt();


function moreTeam() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Are there more team members?',
                name: 'moreTeam',
                choices: [
                    'Yes',
                    'No'
                ]
            }
        ]).then(function (res) {
            console.log(res.moreTeam);
            if (res.moreTeam === 'Yes') {
                initialPrompt();
            }
            else {
                console.log('Beautimous');
            }
        })
};
