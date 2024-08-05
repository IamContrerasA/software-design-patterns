const MathOperations = require('./mathOperations')

class MathFacade {
  constructor() {
    this.mathOperations = new MathOperations()
  }

  performOperation(operation, a, b) {
    switch (operation) {
      case 'add':
        return this.mathOperations.add(a, b)
      case 'subtract':
        return this.mathOperations.subtract(a, b)
      case 'multiply':
        return this.mathOperations.multiply(a, b)
      case 'divide':
        return this.mathOperations.divide(a, b)
      default:
        throw new Error('Invalid operation.')
    }
  }
}

module.exports = MathFacade
