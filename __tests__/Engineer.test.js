const Engineer = require('../lib/Engineer')

const Nate = new Engineer('Nate', '8', 'itsNzte@gmail.com', 'TDGNate')

// test properties 
describe('check if Engineer Values work', () => {
  const { name, id, email, github } = Nate
  
  it('check Name', () => { expect(name).toBe('Nate') })

  it('check ID', () => { expect(id).toBe('8') })

  it('check Email', () => { expect(email).toBe('itsNzte@gmail.com') })

  it('check Github', () => { expect(github).toBe('TDGNate') })
})

// test methods 
describe('check if Engineer Methods work', () => {
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

  it('check Github', () => {
    const callGithub = Nate.getGithub()
    expect(callGithub).toBe('TDGNate')
  })
})