const PaymentStrategy = require('./paymentStrategy')

class PayPalStrategy extends PaymentStrategy {
  constructor(email) {
    super()
    this.email = email
  }

  pay(amount) {
    console.log(`Paid ${amount} using PayPal account ${this.email}.`)
  }
}

module.exports = PayPalStrategy
