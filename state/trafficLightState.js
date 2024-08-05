class TrafficLightState {
  constructor(trafficLight) {
    this.trafficLight = trafficLight
  }

  change() {
    throw new Error('This method should be overridden!')
  }

  reportState() {
    throw new Error('This method should be overridden!')
  }
}

module.exports = TrafficLightState
