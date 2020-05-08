const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function getEmployeeInfo() {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What is this employee's position?",
            choices: ["Engineer", "Manager", "Intern"]
        },
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is their email?"
        }
    ]).then(async function (data) {
        let name = data.name;
        let id = data.id;
        let email = data.email;
        let role = data.role
        let employee;

        if (role == "Engineer") {
            await inquirer.prompt([
                {
                    type: "input",
                    name: "github",
                    message: "What is this employee's github username?"
                }
            ]).then(await function (data) {

                employee = new Engineer(name, id, email, data.github);

                return employee;
            })

        }
        else if (role == "Intern") {
            await inquirer.prompt([
                {
                    type: "input",
                    name: "school",
                    message: "What is this employee's school?"
                }
            ]).then(await function (data) {

                employee = new Intern(name, id, email, data.school);

                return employee;
            })

        }
        else if (role == "Manager") {
            await inquirer.prompt([
                {
                    type: "input",
                    name: "office",
                    message: "What is this employee's office number?"
                }
            ]).then(await function (data) {

                employee = new Manager(name, id, email, data.office);

                return employee;
            })

        }
        console.log(employee)
    })
}


function addEmployee() {
    inquirer.prompt([
        {
            type: "confirm",
            name: "add",
            message: "Would you like to add another employee?"
        }
    ]).then(function (data) {
        if (data.add) {
            getEmployeeInfo();
        }
        else {
            console.log("No new employee")
        }
    })
}

getEmployeeInfo();


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!``