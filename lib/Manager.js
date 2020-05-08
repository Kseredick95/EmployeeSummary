// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, office){

        super (name, id , email)
        this.role = this.getRole();
        this.officeNumber = office;
    }

    getRole(){
        return "Manager";
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

}//end class

module.exports = Manager;