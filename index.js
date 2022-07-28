// importing inquirer 
const inquirer = require('inquirer');

// importing file system 
const fs = require('fs');

// importing lib files 
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

// questions 
const managerQuestions = [
  {
    type: 'input',
    message: "Manager's Name:",
    name: 'managerName'
  },
  {
    type: 'input',
    message: "Manager's ID:",
    name: 'managerId'
  },
  {
    type: 'input',
    message: "Manager's Email:",
    name: 'managerEmail'
  },
  {
    type: 'input',
    message: "Manager's Office Number:",
    name: 'managerOfficeNum'
  }
]

const engineerQuestions = [
  {
    type: 'input',
    message: "Engineer's Name:",
    name: 'engineerName'
  },
  {
    type: 'input',
    message: "Enginner's ID:",
    name: 'enginnerId'
  },
  {
    type: 'input',
    message: "Enginner's Email:",
    name: 'enginnerEmail'
  },
  {
    type: 'input',
    message: "Enginner's Github:",
    name: 'enginnerGithub'
  }
]

const internQuestions = [
  {
    type: 'input',
    message: "Intern's Name:",
    name: 'internName'
  },
  {
    type: 'input',
    message: "Intern's ID:",
    name: 'internId'
  },
  {
    type: 'input',
    message: "Intern's Email:",
    name: 'internEmail'
  },
  {
    type: 'input',
    message: "Intern's School:",
    name: 'internSchool'
  }
]

let managerState = '';
let engineerState = '';
let internState = '';

function startUp() {
  inquirer.prompt(managerQuestions)
    .then(data => {
      console.log(data)
      let isChoosing = true;

      // Create Manager 
      const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNum);
      managerState += `${manager.getCard()}\n`
    })
  
  
}

startUp()