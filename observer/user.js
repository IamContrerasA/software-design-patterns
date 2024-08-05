const Observer = require('./observer')

class User extends Observer {
  constructor(name) {
    super()
    this.name = name
  }

  update(message) {
    console.log(`${this.name} received message: ${message}`)
  }
}

module.exports = User
