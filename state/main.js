const TrafficLight = require('./trafficLight')

const trafficLight = new TrafficLight()

trafficLight.reportState() // Output: Traffic light is Red.
trafficLight.change() // Output: Changing from Red to Green.

trafficLight.reportState() // Output: Traffic light is Green.
trafficLight.change() // Output: Changing from Green to Yellow.

trafficLight.reportState() // Output: Traffic light is Yellow.
