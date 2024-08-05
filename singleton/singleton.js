class Singleton {
  // A static property to hold the single instance of the class
  static instance

  // Private constructor to prevent direct instantiation
  constructor() {
    console.log('init singleton')
    if (Singleton.instance) {
      throw new Error(
        'Use Singleton.getInstance() to get an instance of this class.'
      )
    }
    Singleton.instance = this

    // Add other instance properties here
    this.data = 'Some data'
  }

  // Static method to get the single instance of the class
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }
    return Singleton.instance
  }

  // Example method
  getData() {
    return this.data
  }
}

console.log('SINGLETON')

module.exports = Singleton
