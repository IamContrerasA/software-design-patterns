// mathFacade.js should be included in the mobile app's environment

const mathFacade = new MathFacade()

function performMobileOperation(operation, a, b) {
  try {
    const result = mathFacade.performOperation(
      operation,
      parseFloat(a),
      parseFloat(b)
    )
    console.log(`Result: ${result}`)
  } catch (e) {
    console.log(`Error: ${e.message}`)
  }
}

// Usage
performMobileOperation('add', 5, 3) // Output: Result: 8
performMobileOperation('divide', 10, 0) // Output: Error: Division by zero is not allowed.
