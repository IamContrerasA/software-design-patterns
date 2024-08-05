const PaymentContext = require('./paymentContext')
const PayPalStrategy = require('./payPalStrategy')
const CreditCardStrategy = require('./creditCardStrategy')
const BitcoinStrategy = require('./bitcoinStrategy')

const paymentContext = new PaymentContext()

const paypalStrategy = new PayPalStrategy('user@example.com')
paymentContext.setStrategy(paypalStrategy)
paymentContext.executePayment(100) // Output: Paid 100 using PayPal account user@example.com.

const creditCardStrategy = new CreditCardStrategy('1234-5678-9012-3456')
paymentContext.setStrategy(creditCardStrategy)
paymentContext.executePayment(200) // Output: Paid 200 using Credit Card 1234-5678-9012-3456.

const bitcoinStrategy = new BitcoinStrategy('1ABCD1234EFGH5678')
paymentContext.setStrategy(bitcoinStrategy)
paymentContext.executePayment(300) // Output: Paid 300 using Bitcoin wallet 1ABCD1234EFGH5678.
