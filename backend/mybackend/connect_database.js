const mongoose = require('mongoose')
const User = require('./model/User')

mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.on('open', function () {
  console.log('connect')
})

/* const silence = new Kitten({ name: 'Silence' })
console.log(silence.name)

const fluffy = new Kitten({ name: 'fluffy' })
fluffy.speak()
fluffy.save(function(err, cat) {
  if (err) return console.error(err)
  cat.speak()
}) */
User.find(function (err,users) {
  if (err) return console.error(err)
  console.log(users)
}) 
