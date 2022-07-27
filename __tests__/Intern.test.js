const Intern = require('../lib/Intern')

const Nate = new Intern('Nate', '8', 'itsNzte@gmail.com', 'UCR')

// test properties 
describe('check if Intern Values work', () => {
  const { name, id, email, school } = Nate
  
  it('check Name', () => { expect(name).toBe('Nate') })

  it('check ID', () => { expect(id).toBe('8') })

  it('check Email', () => { expect(email).toBe('itsNzte@gmail.com') })

  it('check school', () => { expect(school).toBe('UCR') })
})

// test methods 
describe('check if Intern Methods work', () => {
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
    const callSchool = Nate.getSchool();
    expect(callSchool).toBe('UCR')
  })

  it('check role', () => {
    const role = Nate.getRole()
    expect(role).toBe('Intern')
  })
})