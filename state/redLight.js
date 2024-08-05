const TrafficLightState = require('./trafficLightState')
const GreenLight = require('./greenLight')

class RedLight extends TrafficLightState {
  constructor(trafficLight) {
    super(trafficLight) // Ensure parent class constructor is called
  }

  change() {
    console.log('Changing from Red to Green.')
    this.trafficLight.setState(new GreenLight(this.trafficLight))
  }

  reportState() {
    console.log('Traffic light is Red.')
  }
}

module.exports = RedLight
