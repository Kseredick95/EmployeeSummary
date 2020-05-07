// TODO: Write code to define and export the Employee class
class Employee{
    constructor(nameEmp, id, email){
        this.name = nameEmp;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return "Employee";
    }
}

module.exports = Employee;