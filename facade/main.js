const readline = require('readline')
const MathFacade = require('./mathFacade')

const mathFacade = new MathFacade()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question(
  'Enter operation (add, subtract, multiply, divide): ',
  (operation) => {
    rl.question('Enter first number: ', (a) => {
      rl.question('Enter second number: ', (b) => {
        const result = mathFacade.performOperation(
          operation,
          parseFloat(a),
          parseFloat(b)
        )
        console.log(`Result: ${result}`)
        rl.close()
      })
    })
  }
)
