const Dog = require('./dog')
const Cat = require('./cat')
const Duck = require('./duck')

class AnimalFactory {
  createAnimal(animalType) {
    switch (animalType) {
      case 'dog':
        return new Dog()
      case 'cat':
        return new Cat()
      case 'duck':
        return new Duck()
      default:
        throw new Error('Unknown animal type')
    }
  }
}

module.exports = AnimalFactory
