const TrafficLightState = require('./trafficLightState')
const YellowLight = require('./yellowLight')

class GreenLight extends TrafficLightState {
  change() {
    console.log('Changing from Green to Yellow.')
    this.trafficLight.setState(new YellowLight(this.trafficLight))
  }

  reportState() {
    console.log('Traffic light is Green.')
  }
}

module.exports = GreenLight
