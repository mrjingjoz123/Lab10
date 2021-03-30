const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
  res.json({ messsage: 'Hello Tidarat' })
})

app.listen(9000, () => {
  console.log('Application is running on port 9000')
})