// importing inquirer 
const inquirer = require('inquirer');

// importing file system 
const fs = require('fs');

// importing lib files 
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

// importing src html layout 
const htmlLayout = require('./src/html-layout')

// Manager questions 
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

// Engineer questions 
const engineerQuestions = [
  {
    type: 'input',
    message: "Engineer's Name:",
    name: 'engineerName'
  },
  {
    type: 'input',
    message: "Engineer's ID:",
    name: 'engineerId'
  },
  {
    type: 'input',
    message: "Engineer's Email:",
    name: 'engineerEmail'
  },
  {
    type: 'input',
    message: "Engineer's Github:",
    name: 'engineerGithub'
  }
]

// Intern Questions 
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

// menu questions 
const menu = [
  {
    type: 'list',
    message: 'Menu: Want to add another User or end here?',
    choices: ['Enginner', 'Intern', 'Close'],
    name: 'menuList'
  }
]

// Storing the state of the cards after user input 
let managerState = '';
let engineerState = '';
let internState = '';

// When application runs, show manager quetions, then menu 
async function startUp() {

  // prompt user for manager data 
  await inquirer.prompt(managerQuestions)
    .then(data => {

      // Create Manager and store data into state variable
      const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNum);
      managerState += `${manager.getCard()}\n`
    })

    // set status to running 
  let isChoosing = true;
  
  // check if user is still wants to add
  while (isChoosing) {

    // prompt user for next role to add 
    const chooseRole = await inquirer.prompt(menu).then(data => { return data.menuList });

    switch (chooseRole) {

      // if user picks enginner 
      case 'Enginner':
        const pickEngineer = await inquirer.prompt(engineerQuestions)
          
        // create engineer and store data into state variable
        let engineer = new Engineer(pickEngineer.engineerName, pickEngineer.engineerId, pickEngineer.engineerEmail, pickEngineer.engineerGithub)
        engineerState += `${engineer.getCard()}\n`
        break;
        
      // if user picks intern
      case 'Intern':
        const pickIntern = await inquirer.prompt(internQuestions)

        // create Intern and store data into state variable
        let intern = new Intern(pickIntern.internName, pickIntern.internId, pickIntern.internEmail, pickIntern.internSchool)
        internState += `${intern.getCard()}\n`
        break;
        
      // if user is done 
      case 'Close':
        isChoosing = false;
        break;
    }
  }

    // call html-layout file to return generated html file 
    let html = htmlLayout(managerState, engineerState, internState)

    // create html file in the dist folder 
    fs.writeFile('./dist/index.html', html, err => { err ? console.log(err) : console.log('Generated File!') })
}

startUp()
  