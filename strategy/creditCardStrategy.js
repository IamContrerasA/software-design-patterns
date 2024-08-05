const PaymentStrategy = require('./paymentStrategy');

class CreditCardStrategy extends PaymentStrategy {
  constructor(cardNumber) {
    super();
    this.cardNumber = cardNumber;
  }

  pay(amount) {
    console.log(`Paid ${amount} using Credit Card ${this.cardNumber}.`);
  }
}

module.exports = CreditCardStrategy;
