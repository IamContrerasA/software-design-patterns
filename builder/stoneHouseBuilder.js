const HouseBuilder = require('./houseBuilder')
const House = require('./house')

class StoneHouseBuilder extends HouseBuilder {
  constructor() {
    super()
    this.house = new House()
  }

  setWindows() {
    this.house.setWindows(6)
  }

  setDoors() {
    this.house.setDoors(3)
  }

  setRoof() {
    this.house.setRoof('stone')
  }

  getResult() {
    return this.house
  }
}

module.exports = StoneHouseBuilder
