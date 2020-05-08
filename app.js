const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

const team = [];

// Get information for employees
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
        //Asks job specific information and creates object of each employee
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

                team.push(employee);
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

                team.push(employee);
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

                team.push(employee);
            })

        }

        addEmployee(team);
    })
}

//Will allow user to add another employee if prompt is answered yes, otherwise it will send information to htmlRenderer
function addEmployee(team) {
    inquirer.prompt([
        {
            type: "confirm",
            name: "add",
            message: "Would you like to add another employee?"
        }
    ]).then(async function (data) {
        if (data.add) {
            getEmployeeInfo();
        }
        else {
            const html = await render(team);
            fileWrite(html);
        }
    })
}

//Writes file ("team.html") to output folder
function fileWrite(html) {

    fs.writeFile(outputPath, html, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Commit logged!");
        }
    })
}

getEmployeeInfo();
