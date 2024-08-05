const RedLight = require('./redLight')

class TrafficLight {
  constructor() {
    this.state = new RedLight(this)
  }

  setState(state) {
    this.state = state
  }

  change() {
    this.state.change()
  }

  reportState() {
    this.state.reportState()
  }
}

module.exports = TrafficLight
