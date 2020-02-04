const inquirer = require('inquirer');

class Employee {
    constructor(name, id, title) {
        this.name = name;
        this.id = id;
        this.title = title;
    }

    getName() {
        // Stuff
    }

    getId() {
        // Stuff
    }

    getEmail() {
        // Stuff
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;