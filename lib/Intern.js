const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email)
    this.school = school;
  }
  
  // Methods for Name, ID, Email, and Role 
  getSchool() { return this.school }
  
  getRole() { return 'Intern' }

  getCard() {
    let card = `
        <div class="card" style="width: 18rem">
        <div class="card-body">
          <div class="card-top bg-success">
            <h5 class="card-title">${this.getName()}</h5>
            <h6 class="card-subtitle mb-2">${this.getRole()}</h6>
          </div>
          <p class="card-info card-text">ID: ${this.getId()}</p>
          <a href="mailto:${this.getEmail()}" class="card-info card-link">Email: ${this.getEmail()}</a>
          <a href="#" class="card-info card-link">School: ${this.getSchool()}</a>
        </div>
        </div>
    `
    return card
  }
}

// export Intern Class
module.exports = Intern