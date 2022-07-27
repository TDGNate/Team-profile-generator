const Employee = require('../lib/Employee')

const Nate = new Employee('Nate', '8', 'itsNzte@gmail.com')

// test properties 
describe('Test to see if Employee values work', () => {
  const { name, id, email, github } = Nate
  
  it('check Name', () => { expect(name).toBe('Nate') })

  it('check ID', () => { expect(id).toBe('8') })

  it('check Email', () => { expect(email).toBe('itsNzte@gmail.com') })
})

// test methods 
describe('Test to see if Employee methods work', () => {
  it('check Name', () => {
    const callName = Nate.getName();
    expect(callName).toBe('Nate')
  })

  it('check ID', () => {
    const callId = Nate.getId();
    expect(callId).toBe('8')
  })

  it('check Email', () => {
    const callEmail = Nate.getEmail();
    expect(callEmail).toBe('itsNzte@gmail.com')
  })

  it('check role', () => {
    const role = Nate.getRole()
    expect(role).toBe('Employee')
  })
})