const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github;
  }
  
  // Methods for Name, ID, Email, and Role 
  getGithub() { return this.github }
  
  getRole() { return 'Engineer' }
}

// export Engineer Class
module.exports = Engineer