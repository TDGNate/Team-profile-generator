const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.officeNumber = officeNumber;
  }
  
  // Methods for Name, ID, Email, and Role 
  getOfficeNum() { return this.officeNumber }
  
  getRole() { return 'Manager' }

  getCard() {
    let card = `
        <div class="card" style="width: 18rem">
        <div class="card-body">
          <div class="card-top">
            <h5 class="card-title">${this.getName()}</h5>
            <h6 class="card-subtitle mb-2">${this.getRole()}</h6>
          </div>
          <p class="card-info card-text">ID: ${this.getId()}</p>
          <a href="mailto:${this.getEmail()}" class="card-info card-link">Email: ${this.getEmail()}</a>
          <a href="#" class="card-info card-link">Office Number: ${this.officeNumber}</a>
        </div>
        </div>
    `
    return card
  }
}

// export Manager Class
module.exports = Manager