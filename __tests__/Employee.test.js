const Employee = require('../lib/Employee')

const Nate = new Employee('Nate', '8', 'itsNzte@gmail.com')

// test properties 
describe('Test to see if Employee values work', () => {
  it('check Name', () => {
    const name = Nate.name;
    expect(name).toBe('Nate')
  })

  it('check ID', () => {
    const id = Nate.id;
    expect(id).toBe('8')
  })

  it('check Email', () => {
    const email = Nate.email;
    expect(email).toBe('itsNzte@gmail.com')
  })
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
})