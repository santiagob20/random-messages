const messages = [
  'OScar',
  'Ana',
  'Santiago',
  'Diego',
  'Jessica',
  'Carolina',
  'Paul',
  'Laura'
]

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)]
  console.log(message)
}

module.exports = { randomMsg }