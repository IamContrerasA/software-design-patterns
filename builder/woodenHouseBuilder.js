const HouseBuilder = require('./houseBuilder')
const House = require('./house')

class WoodenHouseBuilder extends HouseBuilder {
  constructor() {
    super()
    this.house = new House()
  }

  setWindows() {
    this.house.setWindows(4)
  }

  setDoors() {
    this.house.setDoors(2)
  }

  setRoof() {
    this.house.setRoof('wooden')
  }

  getResult() {
    return this.house
  }
}

module.exports = WoodenHouseBuilder
