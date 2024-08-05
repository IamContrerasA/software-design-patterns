const AnimalFactory = require('./animalFactory.js')

const factory = new AnimalFactory()

const dog = factory.createAnimal('dog')
console.log(dog.speak()) // Output: Woof!

const cat = factory.createAnimal('cat')
console.log(cat.speak()) // Output: Meow!

const duck = factory.createAnimal('duck')
console.log(duck.speak()) // Output: Quack!
