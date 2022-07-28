class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  
  // Methods for Name, ID, Email, and Role 
  getName() { return this.name }

  getId() { return this.id }

  getEmail() { return this.email }

  getRole() { return 'Employee' }
}

// export Employee Class
module.exports = Employee