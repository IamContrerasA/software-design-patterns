const HouseDirector = require('./houseDirector')
const WoodenHouseBuilder = require('./woodenHouseBuilder')
const StoneHouseBuilder = require('./stoneHouseBuilder')

const director = new HouseDirector()

const woodenBuilder = new WoodenHouseBuilder()
const woodenHouse = director.construct(woodenBuilder)
woodenHouse.show() // Output: House with 4 windows, 2 doors, and a wooden roof.

const stoneBuilder = new StoneHouseBuilder()
const stoneHouse = director.construct(stoneBuilder)
stoneHouse.show() // Output: House with 6 windows, 3 doors, and a stone roof.
