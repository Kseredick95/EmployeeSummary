// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email){

        super (name, id , email)
        this.role = this.getRole();
        this.officeNumber = this.getOfficeNumber()
    }
    getRole(){
        return "Manager";
    }

    getOfficeNumber(){
        inquirer.prompt([
            {
                type: "input",
                name : "number",
                message : "What is this employee's office number?"
            }
        ]).then(function(data){
            return data.number;
        })
    }

}//end class

module.exports = Manager;