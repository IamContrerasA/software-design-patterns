const Singleton = require('./singleton.js')

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
