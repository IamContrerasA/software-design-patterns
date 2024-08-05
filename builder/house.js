class House {
  constructor() {
    this.windows = 0
    this.doors = 0
    this.roof = ''
  }

  setWindows(windows) {
    this.windows = windows
  }

  setDoors(doors) {
    this.doors = doors
  }

  setRoof(roof) {
    this.roof = roof
  }

  show() {
    console.log(
      `House with ${this.windows} windows, ${this.doors} doors, and a ${this.roof} roof.`
    )
  }
}

module.exports = House
