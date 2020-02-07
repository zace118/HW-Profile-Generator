const inquirer = require('inquirer'),
    fs = require('fs');


// Inquirer inquiring user for name, ID# and job title
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
                'Employee',
                'Engineer',
                'Manager'
            ]

        }
    ]).then(function (res) {
        console.log(res);


    }).catch(function (err) {
        console.log(err);
    })