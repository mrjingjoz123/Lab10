const express = require('express')
const router = express.Router()

router.get('/:message', (req, res, next) => {
  const { params } = req
  res.json({ message: 'Hello my Name is Kob Kob', params })
})

module.exports = router