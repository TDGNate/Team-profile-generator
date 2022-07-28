const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email)
    this.school = school;
  }
  
  // Methods for Name, ID, Email, and Role 
  getSchool() { return this.school }
  
  getRole() { return 'Intern' }
}

// export Intern Class
module.exports = Intern