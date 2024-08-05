class Observer {
  update(message) {
    throw new Error('This method should be overridden!')
  }
}

module.exports = Observer
