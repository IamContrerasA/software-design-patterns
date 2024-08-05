class PaymentStrategy {
  pay(amount) {
    throw new Error('This method should be overridden!')
  }
}

module.exports = PaymentStrategy
