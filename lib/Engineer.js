const inquirer = require("inquirer");
const async = require("async")
const Employee = require("./Employee")

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(name, id, email){

        super (name, id , email)
        this.role = this.getRole();
        this.github = this.getGithub()
    }
    getRole(){
        return "Engineer"
    }

    async getGithub(){
        inquirer.prompt([
            {
                type: "input",
                name : "github",
                message : "What is this employee's github?"
            }
        ]).then(function(data){
            return data.github;
        })
    }
}//end class

module.exports = Engineer;