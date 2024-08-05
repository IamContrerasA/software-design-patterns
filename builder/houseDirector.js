class HouseDirector {
  construct(builder) {
    builder.setWindows()
    builder.setDoors()
    builder.setRoof()
    return builder.getResult()
  }
}

module.exports = HouseDirector
