// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email){

        super (name, id , email)
        this.role = this.getRole();
        this.github = this.getSchool()
    }
    getRole(){
        return "Intern";
    }

    getSchool(){
        inquirer.prompt([
            {
                type: "input",
                name : "school",
                message : "What is this employee's school?"
            }
        ]).then(function(data){
            return data.school;
        })
    }

}//end class

module.exports = Intern;