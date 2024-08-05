const TrafficLightState = require('./trafficLightState')
const RedLight = require('./redLight')

class YellowLight extends TrafficLightState {
  change() {
    console.log('Changing from Yellow to Red.')
    this.trafficLight.setState(new RedLight(this.trafficLight))
  }

  reportState() {
    console.log('Traffic light is Yellow.')
  }
}

module.exports = YellowLight
