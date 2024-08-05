const Subject = require('./subject')
const User = require('./user')

const newsletter = new Subject()

const user1 = new User('Alice')
const user2 = new User('Bob')
const user3 = new User('Charlie')

newsletter.addObserver(user1)
newsletter.addObserver(user2)
newsletter.addObserver(user3)

newsletter.notifyObservers('New issue of the newsletter is out!')
