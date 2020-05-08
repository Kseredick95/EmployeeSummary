const inquirer = require("inquirer");
const Employee = require("./Employee")

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(name, id, email, github){

        super (name, id , email)
        this.role = this.getRole();
        this.github = github;
    }
    getRole(){
        return "Engineer";
    }

    getGithub(){
        return this.github;
    }

}//end class

module.exports = Engineer;