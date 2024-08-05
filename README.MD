Welcome to Node.js v18.16.1.
check some course maybe https://www.educative.io/courses/software-design-patterns-best-practices

# Singleton

The Singleton pattern ensures that a class has only one instance and provides a global point of access to that instance. Here's a basic example of how to implement a Singleton in JavaScript:

Static Property: The static instance property holds the single instance of the class.

Private Constructor: The constructor is private by convention (although JavaScript does not support true private constructors). Attempting to instantiate the class directly throws an error, enforcing the use of the static getInstance method.

Static getInstance Method: This method checks if an instance already exists. If not, it creates one and stores it in the instance property. Subsequent calls to getInstance return the stored instance.

Usage: When attempting to create an instance directly, an error is thrown. The correct way to get the instance is by calling Singleton.getInstance.

```shell
const Singleton = require('./singleton/singleton.js');
```

```js
// Usage
try {
  const singleton1 = new Singleton() // This will throw an error
} catch (e) {
  console.log(e.message) // Use Singleton.getInstance() to get an instance of this class.
}

const singleton2 = Singleton.getInstance()
console.log(singleton2.getData()) // Output: Some data

const singleton3 = Singleton.getInstance()
console.log(singleton2 === singleton3) // Output: true
```

# Factory Method

The Factory Method pattern is a creational design pattern that provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created. This pattern is particularly useful when the exact type of object to be created is determined at runtime.

Animal Classes: Dog, Cat, and Duck classes each implement a speak method that returns a string representing the sound the animal makes.

Animal Factory: The AnimalFactory class contains the createAnimal method, which takes an animalType as an argument. This method uses a switch statement to determine which type of Animal to create and return.

Using the Factory: An instance of AnimalFactory is created, and the createAnimal method is called with different arguments to create instances of Dog, Cat, and Duck.

```shell
const AnimalFactory = require('./factory-method/animalFactory.js');
```

```js
const factory = new AnimalFactory()

const dog = factory.createAnimal('dog')
console.log(dog.speak()) // Output: Woof!

const cat = factory.createAnimal('cat')
console.log(cat.speak()) // Output: Meow!

const duck = factory.createAnimal('duck')
console.log(duck.speak()) // Output: Quack!
```

# Strategy

The Strategy pattern is a behavioral design pattern that enables selecting an algorithm's behavior at runtime. This pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. The Strategy pattern allows the algorithm to vary independently from clients that use it.

Strategy Interface: PaymentStrategy defines a common interface for all concrete strategies with a pay method.

Concrete Strategies: PayPalStrategy, CreditCardStrategy, and BitcoinStrategy each implement the pay method specific to their payment method.

Context Class: PaymentContext uses a PaymentStrategy to process payments. The strategy can be changed at runtime using the setStrategy method.

Usage: We create instances of different payment strategies and use them with the PaymentContext to process payments.

```shell
const PaymentContext = require('./strategy/paymentContext');
const PayPalStrategy = require('./strategy/payPalStrategy');
const CreditCardStrategy = require('./strategy/creditCardStrategy');
const BitcoinStrategy = require('./strategy/bitcoinStrategy');
```

```js
const paymentContext = new PaymentContext()

const paypalStrategy = new PayPalStrategy('user@example.com')
paymentContext.setStrategy(paypalStrategy)
paymentContext.executePayment(100) // Output: Paid 100 using PayPal account user@example.com.

const creditCardStrategy = new CreditCardStrategy('1234-5678-9012-3456')
paymentContext.setStrategy(creditCardStrategy)
paymentContext.executePayment(200) // Output: Paid 200 using Credit Card 1234-5678-9012-3456.

const bitcoinStrategy = new BitcoinStrategy('1ABCD1234EFGH5678')
paymentContext.setStrategy(bitcoinStrategy)
paymentContext.executePayment(300) // Output: Paid 300 using Bitcoin wallet 1ABCD1234EFGH5678.
```

# Observer

The Observer pattern is a behavioral design pattern that defines a one-to-many relationship between objects. When one object (the subject) changes state, all its dependents (observers) are notified and updated automatically. This pattern is useful for implementing distributed event-handling systems.

Subject: The Subject class maintains a list of observers and provides methods to add, remove, and notify observers. The notifyObservers method calls the update method on each observer with a message.

Observer Interface: The Observer class defines an update method that concrete observers must implement.

Concrete Observers: The User class extends Observer and implements the update method to define how users are notified.

Usage: An instance of Subject is created, and instances of User are added as observers. When notifyObservers is called on the subject, all observers are notified with the given message.

```shell
const Subject = require('./observer/subject');
const User = require('./observer/user');
```

```js
const newsletter = new Subject()

const user1 = new User('Alice')
const user2 = new User('Bob')
const user3 = new User('Charlie')

newsletter.addObserver(user1)
newsletter.addObserver(user2)
newsletter.addObserver(user3)

newsletter.notifyObservers('New issue of the newsletter is out!')
```

# Builder

The Builder pattern is a creational design pattern that allows for the construction of complex objects step by step. It separates the construction of a complex object from its representation, allowing the same construction process to create different representations.

Product: The House class represents the complex object being constructed. It has methods to set its attributes (windows, doors, roof) and a method to display them.

Builder Interface: The HouseBuilder class defines an interface for building the different parts of a house. Concrete builders will implement this interface.

Concrete Builders: WoodenHouseBuilder and StoneHouseBuilder are concrete builders that construct wooden and stone houses, respectively. Each builder sets the attributes of the house in its own way.

Director: The HouseDirector class controls the construction process using a builder. It ensures that the construction steps are executed in the correct order.

Usage: An instance of HouseDirector is created, and different builders are used to construct different types of houses.

```shell
const HouseDirector = require('./builder/houseDirector');
const WoodenHouseBuilder = require('./builder/woodenHouseBuilder');
const StoneHouseBuilder = require('./builder/stoneHouseBuilder');
```

```js
const director = new HouseDirector()

const woodenBuilder = new WoodenHouseBuilder()
const woodenHouse = director.construct(woodenBuilder)
woodenHouse.show() // Output: House with 4 windows, 2 doors, and a wooden roof.

const stoneBuilder = new StoneHouseBuilder()
const stoneHouse = director.construct(stoneBuilder)
stoneHouse.show() // Output: House with 6 windows, 3 doors, and a stone roof.
```

# Adapter

The Adapter pattern is a structural design pattern that allows objects with incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces by converting the interface of a class into another interface that a client expects.

Target Interface: The MediaPlayer class defines the interface that the client expects to use. It has a play method that must be overridden by concrete implementations.

Adaptee Classes: Mp4Player and VlcPlayer are existing classes with incompatible interfaces. They have specific methods (playMp4 and playVlc) to play their respective formats.

Adapter Class: The MediaAdapter class extends MediaPlayer and implements the play method. It creates an instance of the appropriate adaptee class (Mp4Player or VlcPlayer) based on the audio type and delegates the play request to the corresponding method.

Client Class: The AudioPlayer class also extends MediaPlayer and uses the MediaAdapter to play formats other than MP3. It decides which adapter to use based on the audio type.

Usage: An instance of AudioPlayer is created, and the play method is called with different audio types and file names. The AudioPlayer uses the MediaAdapter to play MP4 and VLC files, while it directly plays MP3 files.

```shell
const AudioPlayer = require('./adapter/audioPlayer');

```

```js
const audioPlayer = new AudioPlayer()

audioPlayer.play('mp3', 'song.mp3') // Output: Playing mp3 file. Name: song.mp3
audioPlayer.play('mp4', 'video.mp4') // Output: Playing mp4 file. Name: video.mp4
audioPlayer.play('vlc', 'movie.vlc') // Output: Playing vlc file. Name: movie.vlc
audioPlayer.play('avi', 'clip.avi') // Output: Invalid media. avi format not supported.
```

# State

The State pattern is a behavioral design pattern that allows an object to alter its behavior when its internal state changes. The object will appear to change its class. This pattern is particularly useful for managing state transitions in state machines.

Context: The TrafficLight class maintains an instance of a state subclass that defines the current state. It provides a method (setState) to change the current state and delegates state-specific behavior to the current state object.

State Interface: The TrafficLightState class defines the interface for states. Concrete states will extend this class and implement its methods (change and reportState).

Concrete States: RedLight, YellowLight, and GreenLight are concrete states that implement the behavior associated with a particular state of the context. Each state knows how to transition to the next state.

Usage: An instance of TrafficLight is created, and its state is managed by calling change to transition between states and reportState to report the current state.

```shell
const TrafficLight = require('./state/trafficLight');
```

```js
const trafficLight = new TrafficLight()

trafficLight.reportState() // Output: Traffic light is Red.
trafficLight.change() // Output: Changing from Red to Green.

trafficLight.reportState() // Output: Traffic light is Green.
trafficLight.change() // Output: Changing from Green to Yellow.

trafficLight.reportState() // Output: Traffic light is Yellow.
```

# Facade (Fasads)

The Facade pattern provides a simplified interface to a complex subsystem. This pattern is especially useful when you want to provide a simple way to access a complicated set of classes or a complicated subsystem. It makes a complex system easier to use by creating a single interface to interact with it.

Core Logic: The MathOperations class contains the core logic for performing mathematical operations.

Facade Class: The MathFacade class provides a simplified interface to the core logic, making it easier to use in different contexts.

Console Interface: The console interface uses the facade to interact with the user and perform operations based on user input.

Browser Interface: The browser interface provides an HTML form for user input and uses the facade to perform operations and display the result.

Mobile Interface: The mobile interface uses the facade in a similar manner to the console and browser interfaces.

```shell
const readline = require('readline');
const MathFacade = require('./facade/mathFacade');
```

```js
const mathFacade = new MathFacade()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question(
  'Enter operation (add, subtract, multiply, divide): ',
  (operation) => {
    rl.question('Enter first number: ', (a) => {
      rl.question('Enter second number: ', (b) => {
        const result = mathFacade.performOperation(
          operation,
          parseFloat(a),
          parseFloat(b)
        )
        console.log(`Result: ${result}`)
        rl.close()
      })
    })
  }
)
```
