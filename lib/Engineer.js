const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github;
  }
  
  // Methods for Name, ID, Email, and Role 
  getGithub() { return this.github }
  
  getRole() { return 'Engineer' }

  getCard() {
    let card = `
        <div class="card" style="width: 18rem">
        <div class="card-body">
          <div class="card-top bg-primary">
            <h5 class="card-title">${this.getName()}</h5>
            <h6 class="card-subtitle mb-2">${this.getRole()}</h6>
          </div>
          <p class="card-info card-text">ID: ${this.getId()}</p>
          <a href="mailto:${this.getEmail()}" class="card-info card-link">Email: ${this.getEmail()}</a>
          <a href="https://github.com/${this.getGithub()}" class="card-info card-link" target="_blank" >Github: ${this.getGithub()}</a>
        </div>
        </div>
    `
    return card
  }
}

// export Engineer Class
module.exports = Engineer