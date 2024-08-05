class PaymentContext {
  setStrategy(strategy) {
    this.strategy = strategy
  }

  executePayment(amount) {
    if (!this.strategy) {
      throw new Error('Payment strategy not set.')
    }
    this.strategy.pay(amount)
  }
}

module.exports = PaymentContext
