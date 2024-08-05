const PaymentStrategy = require('./paymentStrategy')

class BitcoinStrategy extends PaymentStrategy {
  constructor(walletAddress) {
    super()
    this.walletAddress = walletAddress
  }

  pay(amount) {
    console.log(`Paid ${amount} using Bitcoin wallet ${this.walletAddress}.`)
  }
}

module.exports = BitcoinStrategy
