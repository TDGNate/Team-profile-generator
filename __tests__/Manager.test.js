const Manager = require('../lib/Manager')

const Nate = new Manager('Nate', '8', 'itsNzte@gmail.com', '123')

// test properties 
describe('check if Manager Values work', () => {
  const { name, id, email, officeNumber } = Nate
  
  it('check Name', () => { expect(name).toBe('Nate') })

  it('check ID', () => { expect(id).toBe('8') })

  it('check Email', () => { expect(email).toBe('itsNzte@gmail.com') })

  it('check officeNumber', () => { expect(officeNumber).toBe('123') })
})

// test methods 
describe('check if Manager Methods work', () => {
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

  it('check School', () => {
    const callOfficeNum = Nate.getOfficeNum();
    expect(callOfficeNum).toBe('123')
  })

  it('check role', () => {
    const role = Nate.getRole();
    expect(role).toBe('Manager')
  })
})